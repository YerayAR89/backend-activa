import mysql from "mysql2";
import * as dotenv from 'dotenv'; //importacion del archivo .env
import path from 'path';

dotenv.config({ path: path.join(__dirname, "..", ".env") });

const connectionData = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PWD,
    database: process.env.DB_NAME
}

const db = mysql.createConnection(connectionData);

export { db, connectionData };  
