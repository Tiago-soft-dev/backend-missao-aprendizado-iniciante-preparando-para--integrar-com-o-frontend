const Joi = require('joi')
const joi = require('joi')

const personagem = joi.object({
    nome: joi
    .string()
    .min(3)
    .max(30)
    .required(),
})

module.exports = personagem