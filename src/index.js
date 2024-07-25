require('dotenv').config()
const express=require('express')
//const { MongoClient, ObjectId } = require('mongodb')
const { connectToDataBase } = require('./db/database-connection')
const personagemRouter = require ('./personagem/personagem.router')
const cors = require('cors')


async function main(){
// FIX: utilizar o connectToDataBase e receber o BD
await connectToDataBase()

//const collection = db.collection('personagem')

const app=express()

//middlewares
app.use(express.json()) //express usando json
app.use(cors())
app.use('/personagem', personagemRouter)
app.use(function(err,req,res,next){
    console.error(err.stack)
    res.status(500).send({erro: 'Algo deu errado!'})
})
app.listen(3000, ()=>console.log('servidor online'))
}
main()