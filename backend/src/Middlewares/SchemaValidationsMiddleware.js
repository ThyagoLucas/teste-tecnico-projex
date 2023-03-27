
export function schemaValidations(schema){
    return(req, res ,next)=>{
        const validation = schema.validate(req.body);
        if(validation.error){
            throw {type:400, message: `invalid datas: \n ${validation.error}`}
        }
        next();
    }
}