import dayjs from 'dayjs';
import { getConnection } from '../database/database.js'
import * as bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';
import * as jwt from '../Middlewares/passwordAndToken.js'

const db = getConnection();

export async function create( name, email, password ){

    await checkEmailAlreadyRegistered(email)
    
    const hash = jwt.encrypt(password);

    const user = {
        id: uuidv4(),
        name:name,
        email:email,
        password: hash,
        createdAt: dayjs().format('DD/MM/YYYY - HH:mm:ss')

    }

    await db.data.users.push(user)
    await db.write();
    
}

export async function login(email, password){

    const users = db.data.users;

    // busca usuario pelo email
    const thereIs = []    
    for(let value of users){
        if(email === value.email) thereIs.push(value);
    }
    if(!thereIs) throw {type: 404, message:'User not found.'}
    
    //verifica a senha e gera o token
    let token = '';
    if(jwt.decrypt(password, thereIs[0].password)) token = jwt.tokenGenerator(thereIs[0].id);
    else throw {type: 404, message:'Invalid password'};

    const session = {
        token: token,
        valid:true,
        createdAt: dayjs().format('DD/MM/YYYY - HH:mm:ss')
    }

     //grava a session e  envia o token
    await db.data.sessions.push(session)
    await db.write();

    return token;
}

async function checkEmailAlreadyRegistered(email){
   
    let thereIs = false;
    const users = db.data.users
         
    for(let user of users){
    
        if(user.email === email) throw {type: 400, message:"Email already registered"}
        
    }
    return thereIs;
   
}