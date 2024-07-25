const { MongoClient } = require("mongodb");

//dados de configuracao do servidor
const dbUrl = process.env.DATABASE_URL
const dbName = process.env.DATABASE_NAME

const client = new MongoClient(dbUrl)



async function connectToDataBase(){
//conexao do servidor    
console.log('Conectando ao BD');
await client.connect()
console.log('BD conectado');
}

function getDatabase(){
    return client.db(dbName)
}

module.exports = {
    connectToDataBase,
    getDatabase
}