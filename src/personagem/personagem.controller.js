const { Collection } = require("mongodb")
const service = require('./personagem.service')

 async function readAll(req,res){
    const personagens =  await service.readAll()
    res.send(personagens)
}

async function readById(req,res){
    const id = req.params.id

    const personagem = await service.readById(id)

    if(!personagem){
        return res.status(404).send('personagem não encontrado')
    }
    res.send(personagem)
}

async function create(req,res){
    const novoPersonagem = req.body

    if(!novoPersonagem || !novoPersonagem.nome){
        return res.status(400).send('corpo da requisição inválido')
    }

    await service.create(novoPersonagem)
    res.status(201).send(novoPersonagem)
    }

async function updateById(req,res){
    const id = req.params.id

    const novoPersonagem = req.body
    
    if(!novoPersonagem || !novoPersonagem){
        res.status(400).send('corpo da requisição inválido')
    }

    await service.updateById(id, novoPersonagem)

    res.status(201).send(novoPersonagem)
}

async function deleleById(req,res){
    const id = req.params.id
    await service.deleleById(id)
    res.status(201).send('personagem removido com sucesso')
}

module.exports = {
    readAll,
    readById,
    create,
    updateById,
    deleleById
}