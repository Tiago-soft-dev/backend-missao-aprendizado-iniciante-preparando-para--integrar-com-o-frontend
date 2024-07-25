require('dotenv').config()
const express=require('express')
//const { MongoClient, ObjectId } = require('mongodb')
const { connectToDataBase } = require('./db/database-connection')
const personagemRouter = require ('./personagem/personagem.router')



async function main(){
// FIX: utilizar o connectToDataBase e receber o BD
await connectToDataBase()

//const collection = db.collection('personagem')

const app=express()

//middlewares
app.use(express.json()) //express usando json
app.use('/personagem', personagemRouter)

app.listen(3000, ()=>console.log('servidor online'))
}
main()