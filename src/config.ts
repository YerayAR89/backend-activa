import mysql from "mysql2";

const PORT=3000;

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "bd_activa_app",
});

export {PORT, db};  
