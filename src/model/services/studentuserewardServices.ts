import {Studentusereward} from "../types/studentusereward.js";
//import {Reward} from "../types/reward.js";
import {db} from "../../config.js";
import {OkPacket, RowDataPacket} from "mysql2";


function informAllUsers(callback:Function){
    const queryString = "SELECT u.id, s.name, s.first_surname, u.role, u.email FROM student s INNER JOIN user u ON u.id = s.id_user";
    console.log(queryString);
    db.query(queryString, (err, result)=>{
      if(err) callback(err, null);
    
      const usersinfo = result;
      callback(null, usersinfo);
    } )
  };

function findOneUser(idUser: string, callback:Function) {
  const queryString = "SELECT * FROM student s INNER JOIN user u ON u.id = s.id_user WHERE u.id = ?";
  db.query(queryString, [idUser], (err, result)=>{
    if(err) callback(err, null);
    const returnUserFound: Studentusereward = (<RowDataPacket>result)[0];
    callback(null, returnUserFound);
})
}

export {informAllUsers, findOneUser};