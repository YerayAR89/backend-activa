import {db} from "../../config.js";
import {OkPacket, RowDataPacket} from "mysql2";
import {User} from "../types/user.js";


function createUser(user: User, callback: Function){
    const queryString = "INSERT INTO user (email, password, role) VALUES (?, ?, ?)"
  
    db.query(
      queryString,
      [user.activaEmailAddress, user.password, user.role],
      (err, result) => {
        if (err) {callback(err, null)};
        
        const insertId = (<OkPacket> result).insertId;
        callback(null, insertId);
      }
    );
  };

function findAllUsers(callback:Function){
  const queryString = "SELECT * FROM users";
    db.query(queryString, (err, result)=>{
    if(err) callback(err, null);

    const users = result;
    callback(null, users);
    } )
};

export {createUser,findAllUsers};