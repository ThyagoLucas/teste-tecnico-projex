import dayjs from 'dayjs';
import { getConnection } from '../database/database.js'
import * as bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';

const db = getConnection();

export async function create( name, email, password ){

    await checkEmailAlreadyRegistered(email)
    
    const hash = bcrypt.hashSync(password, 10);

    console.log(hash)
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

}

async function checkEmailAlreadyRegistered(email){
   
    let thereIs = false;
    const users = db.data.users
         
    for(let user of users){
    
        if(user.email === email) throw {type: 400, message:"Email already registered"}
        
    }
    return thereIs;
   
}