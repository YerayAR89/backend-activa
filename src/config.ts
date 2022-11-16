<<<<<<< HEAD
import mysql from "mysql2";

const PORT=3000;

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Pau09Joan19Leo20@",
  database: "bd_activa_app",
});

export {PORT, db};  
=======
const PORT = 3000;

export { PORT };
>>>>>>> 9666b455645e1444280effc8cf394c1c929a42bc
