import * as uService from '../services/authService.js'

export async function signUp( req, res ){

    const {file, name, email, password } = req.body;

    const files = req.file

    const create = await uService.create(name, email, password)

    res.send(JSON.stringify({data: 'sucess'}));
}

export async function signIn( req, res ){

    const {email, password } = req.body;

    console.log(req.body)

    const token = await uService.login( email, password)

    res.json({token:token});
}