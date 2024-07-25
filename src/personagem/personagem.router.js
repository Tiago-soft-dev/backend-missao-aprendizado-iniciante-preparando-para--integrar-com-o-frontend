const express=require('express')
const controller = require('./personagem.controller')
const {validateObjectId } = require('../db/database.helpers')
const router = express.Router()

function teste(req,res){
    res.send('ok')
}




router.get('/', controller.readAll)
router.get('/:id', validateObjectId, controller.readById)
router.post('/', controller.create)
router.put('/:id', validateObjectId, controller.updateById)
router.delete('/:id', validateObjectId, controller.deleleById)

module.exports = router