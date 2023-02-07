const { Op } = require('sequelize');
const models = require('../../database/models')
const Ministrante = models.Ministrante 

//função que lista todos ítens
async function lst(req, res) {
  const ministrantes = await Ministrante.findAll()
  res.render("admin/ministrante/lst", { Logado:req.user, Ministrantes:ministrantes });
}
//função que lista todos ítens de acordo com pesquisa
async function filtro(req, res) {
  const ministrantes = await Ministrante.findAll({
    where:{
      nome: {
        [Op.iLike]: '%'+req.body.pesquisar+'%'
      }
    }
  })
  res.render("admin/ministrante/lst" , {Logado:req.user, Ministrantes:ministrantes});
}
//função que abre a tela de add
async function abreadd(req, res) {
  res.render("admin/ministrante/add",{Logado:req.user});
}
//função que adiciona
async function add(req, res) {
  const ministrante = await Ministrante.create({
    nome:req.body.nome, 
    email:req.body.email, 
    sobre:req.body.sobre, 
    foto:req.file.filename,
    facebook:req.body.facebook,
    instagram:req.body.instagram,
    twitter:req.body.twitter,
    linkedin:req.body.linkedin,
    lattes:req.body.lattes,
  }).catch(function(err) {
    console.log(err)
    
  });
  res.redirect('/admin/ministrante/lst')
}
//função que abre tela de edt
async function abreedt(req, res) {
  const ministrante = await Ministrante.findByPk(req.params.id);
  res.render("admin/ministrante/edt", {Logado:req.user,Ministrante:ministrante});
}
//função que edita
async function edt(req, res) {
  const ministrante = await Ministrante.findByPk(req.params.id);
  await ministrante.update({
    nome:req.body.nome, 
    email:req.body.email, 
    sobre:req.body.sobre, 
    foto:req.file.filename,
    facebook:req.body.facebook,
    instagram:req.body.instagram,
    twitter:req.body.twitter,
    linkedin:req.body.linkedin,
    lattes:req.body.lattes,
  })
  res.redirect('/admin/ministrante/lst')
}
//função que deleta ítens
async function del(req, res) {
  const ministrante = await Ministrante.findByPk(req.params.id);
  await ministrante.destroy()
  res.redirect('/admin/ministrante/lst')
}

module.exports = { lst, filtro, abreadd, add, abreedt, edt, del };