const Joi = require('joi')
const joi = require('joi')

const personagem = joi.object({
    nome: joi.string()
        .min(1)
        .max(30)
        .required(),

    imagem: joi.string()
        .uri()
        .required(),

    evoluiPara: joi.string()
        .min(1)
        .max(30)
        .optional()
})

module.exports = personagem