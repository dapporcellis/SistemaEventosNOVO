const models = require('../../database/models')

async function home(req,res,next){
    if(req.params.siglaano=='admin'){
        next();
    }
    const evento = await models.Evento.findOne({where:{
        siglaano:req.params.siglaano.toUpperCase()
    }})
    const oficinas = await models.Oficina.findAll({where:{
        eventoId:evento.id
    },include: 'ministrantes'})

    const palestras = await models.Palestra.findAll({where:{
        eventoId:evento.id
    },include: 'ministrantes'})
    
    const ministrantes = await models.Ministrante.findAll()

    res.render('public/index', {Evento:evento, Ministrantes:ministrantes, Oficinas:oficinas, Palestras:palestras })
}

async function sobre(req,res){
    
}

async function ministrantes(req,res){
    
}

async function cronograma(req,res){
    
}

async function noticias(req,res){
    
}

async function contatos(req,res){
    
}

module.exports = {home,sobre,ministrantes,cronograma,noticias,contatos}