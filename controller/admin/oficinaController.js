const {
  Op
} = require('sequelize');
const models = require('../../database/models')
const Oficina = models.Oficina

//função que lista todos ítens
async function lst(req, res) {
  const oficinas = await Oficina.findAll()
  res.render("admin/oficina/lst", {
    Logado: req.user,
    Oficinas: oficinas
  });
}
//função que lista todos ítens de acordo com pesquisa
async function filtro(req, res) {
  const oficinas = await Oficina.findAll({
    where: {
      nome: {
        [Op.iLike]: '%' + req.body.pesquisar + '%'
      }
    }
  })
  res.render("admin/oficina/lst", {
    Logado: req.user,
    Oficinas: oficinas
  });
}
//função que abre a tela de add
async function abreadd(req, res) {
  const eventos = await models.Evento.findAll();
  const ministrantes = await models.Ministrante.findAll();
  res.render("admin/oficina/add", {
    Logado: req.user,
    Eventos: eventos,
    Ministrantes: ministrantes
  });
}
//função que adiciona
async function add(req, res) {

  const oficina = await Oficina.create({
    nome: req.body.nome,
    carga: req.body.carga,
    datahora: req.body.datahora,
    vagas: req.body.vagas,
    ordem: req.body.ordem,
    eventoId: req.body.eventoId
  })
  let arr;
  if (Array.isArray(req.body.ministranteId)) {
    arr = req.body.ministranteId;
  } else {
    arr = [...[req.body.ministranteId]];
  }
  arr.forEach(async function (id) {
    const ministrante = await models.Ministrante.findByPk(id)
    await oficina.addMinistrante(ministrante);
  });

  res.redirect('/admin/oficina/lst')
}
//função que abre tela de edt
async function abreedt(req, res) {
  const eventos = await models.Evento.findAll();
  const ministrantes = await models.Ministrante.findAll();
  const oficina = await Oficina.findByPk(req.params.id, {
    include: 'ministrantes'
  });
  res.render("admin/oficina/edt", {
    Logado: req.user,
    Oficina: oficina,
    Eventos: eventos,
    Ministrantes: ministrantes
  });
}
//função que edita
async function edt(req, res) {
  const oficina = await Oficina.findByPk(req.params.id, {
    include: 'ministrantes'
  });
  await oficina.update({
    nome: req.body.nome,
    carga: req.body.carga,
    datahora: req.body.datahora,
    vagas: req.body.vagas,
    ordem: req.body.ordem,
    eventoId: req.body.eventoId
  })
  let arr;
  if (Array.isArray(req.body.ministranteId)) {
    arr = req.body.ministranteId;
  } else {
    arr = [...[req.body.ministranteId]];
  }
  await oficina.removeMinistrantes(oficina.ministrantes)
  arr.forEach(async function (id) {
    const ministrante = await models.Ministrante.findByPk(id)
    await oficina.addMinistrante(ministrante);
  });

  res.redirect('/admin/oficina/lst')
}
//função que deleta ítens
async function del(req, res) {
  const oficina = await Oficina.findByPk(req.params.id);
  await oficina.destroy()
  res.redirect('/admin/oficina/lst')
}

module.exports = {
  lst,
  filtro,
  abreadd,
  add,
  abreedt,
  edt,
  del
};