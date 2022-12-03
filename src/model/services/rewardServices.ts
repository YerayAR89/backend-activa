import {Student} from "../types/student.js";
import { User } from "../types/users.js";
import {db} from "../../config.js";
import {OkPacket, RowDataPacket} from "mysql2";
import bcrypt from 'bcrypt';

function recievedPoints(callback: Function){
    const queryString = "SELECT student.name, reward.id_user_sender,reward.xp_points, reward.date,reward.description  FROM student INNER JOIN user ON user.id=student.id INNER JOIN reward ON reward.id=user.id";
    db.query(queryString, (err, result)=>{
      if(err){ callback(err, null)};
      
      const recieved = result;
      callback(null, result);
    })
  };

  export {recievedPoints}