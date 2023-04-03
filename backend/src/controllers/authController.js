import * as uService from '../services/authService.js'

export async function register( req, res ){

    const {file, name, email, password } = req.body;

    const files = req.file

    const create = await uService.create(name, email, password)

   
     
      res.send(JSON.stringify({data: 'sucess'}));

   

}