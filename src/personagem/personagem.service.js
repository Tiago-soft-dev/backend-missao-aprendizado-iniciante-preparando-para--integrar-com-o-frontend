const { ObjectId } = require('mongodb')
const { getDatabase } = require("../db/database-connection")

function getCollection(){
    return getDatabase().collection('personagem')
}

function readAll(){
    return getCollection().find().toArray()
}


/**
 * 
 * @param {string} id 
 * @returns 
 */

function readById(id){
    return getCollection().findOne({_id: new ObjectId(id)})
}

function create(novoPersonagem){
    return getCollection().insertOne(novoPersonagem)
}

function updateById(id, novoPersonagem){
    return getCollection().updateOne(
       { _id: new ObjectId(id)},
        {$set: novoPersonagem}
    )
}

function deleleById(id){
    return getCollection().deleteOne({_id: new ObjectId(id)})
}

module.exports = {
    readAll,
    readById,
    create,
    updateById,
    deleleById
}