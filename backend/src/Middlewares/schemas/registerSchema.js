import Joi from "joi";

const registerSchema = Joi.object({
    FormData:({
        file:Joi.object(),
        name: Joi.string().required(),
        email: Joi.string().email().required(),
        password:Joi.string().min(5).required()
    })
   
})

export default registerSchema;