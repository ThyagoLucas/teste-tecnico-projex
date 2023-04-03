// Remember to set type: module in package.json or use .mjs extension
import { Low} from 'lowdb';
import { JSONFile } from 'lowdb/node'
import { join, dirname } from 'path';
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url));

let db;

async function createConnection(){
    const file = join(__dirname, 'db.json');
    const adapter = new JSONFile(file);
    db = new Low(adapter)
   
    await db.read()    

    db.data ||= { users:[], sessions:[]};

    await db.write()

}
 createConnection()

 export const getConnection = () => db;