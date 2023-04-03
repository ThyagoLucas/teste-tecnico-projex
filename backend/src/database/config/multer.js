import multer from "multer";
import path from 'path';
import crypto from 'crypto';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

export default  { 

    dest: path.resolve(dirname(fileURLToPath(import.meta.url)), '..', 'images' ),
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, path.resolve(dirname(fileURLToPath(import.meta.url)), '..', 'images' ))
         },
        filename: (req, file, cb) => {
            crypto.randomBytes(16, (err, hash)=>{
                const fileName = `${hash.toString('hex')}-${file.originalname}`
                cb(null, fileName);
            })
         }
    }),
    limits: {
        fileSize: 2 * 1024 * 1024
    },
    fileFiltre:(req, file, cb)=>{
        const allowedMines = [
            'image/jpeg',
            'image/png',
        ];

        if(allowedMines.includes(file.mimetype)){
            cb(null, true)
        }else{
            cb(new Error("Invalid file type."))
        }
    }
}