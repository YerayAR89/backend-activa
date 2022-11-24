import mysql from "mysql2";

const PORT=3000;

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
<<<<<<< HEAD
  password: "Villaplana11",
=======
  password: "Pau09Joan19Leo20@",
>>>>>>> 0541dc4a19ab4d74ea53108fbf1a0a0275280478
  database: "bd_activa_app",
});

export {PORT, db};  
