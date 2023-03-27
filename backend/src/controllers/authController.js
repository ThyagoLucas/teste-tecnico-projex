import * as uService from '../services/authService.js'
export async function register( req, res ){

    const { name, email, password } = req.body;

    const create = await uService.create(name, email,password)

    res.send('created').status(201);
}