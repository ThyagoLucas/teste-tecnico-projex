import * as bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export function encrypt(password){

    const encryptedPassword = bcrypt.hashSync(password, 10);

    return encryptedPassword;
}

export function decrypt(password, hash){
    const dencryptedPassword = bcrypt.compareSync(password, hash);
    return dencryptedPassword;
}

export function userIdByToken (token){

    const user = jwt.verify(token, process.env.JWT_SECRET);

    return Number (user.userId);
}

export function tokenGenerator(userId){

    const dados = { userId:userId };
    const config = { expiresIn: 60*60*24 } // 1 dia em segundos
    const token = jwt.sign(dados, process.env.JWT_SECRET, config);
    
    return token
}