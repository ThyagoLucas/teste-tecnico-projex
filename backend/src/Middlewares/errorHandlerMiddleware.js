
export default function errorHandler(error, req, res ,next ){
    
    console.log('Erroror:', error);

    if(error){
        return res.status(error.type).send(error.message);
    }
}