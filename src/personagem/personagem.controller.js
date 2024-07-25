const { Collection } = require("mongodb")
const service = require('./personagem.service')
const personagem = require("./personagem.entity")

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
    const {error, value: novoPersonagem} = personagem.validate(req.body)

    if(error){
        return res.status(400).send({error: error.details[0].message})
    }

    await service.create(novoPersonagem)
    res.status(201).send(novoPersonagem)
    }

async function updateById(req,res){
    const id = req.params.id

    const {error, value: novoPersonagem} = personagem.validate(req.body)
        if(error){
            return res.status(400).send({error: error.details[0].message})}

    await service.updateById(id, novoPersonagem)

    res.status(201).send(novoPersonagem)
}

async function deleleById(req,res){
    const id = req.params.id
    const deleteResult = await service.deleleById(id)
    
        if(deleteResult.deletedCount === 1){
        return res.status(201).send({message: 'personagem removido com sucesso'})
        } else {
            return res.status(400).send({error: 'personagem não encontrado'})
        }
}

module.exports = {
    readAll,
    readById,
    create,
    updateById,
    deleleById
}