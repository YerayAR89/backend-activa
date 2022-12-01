import {Reward} from "../types/reward.js";
import {db} from "../../config.js";
import {OkPacket, RowDataPacket} from "mysql2";


function createReward(reward: Reward, callback: Function){
    const queryString = "INSERT INTO reward (id_user_sender, id_user_rewarded, xp_points, date, description) VALUES (1, ?, ?, CURRENT_TIMESTAMP(), ?)"
 
    db.query(
      queryString,
      [reward.idUserRewarded, reward.xpPoints, reward.description],
      (err, result) => {
        if (err) {callback(err, null)};
        
        const insertId = (<OkPacket> result).insertId;
        callback(null, insertId);
      }
    
    );console.log(queryString);
  };
  

export {createReward};