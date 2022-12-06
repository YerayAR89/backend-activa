import {db} from "../../config.js";

function showRanking(callback: Function){
    const queryString = "SELECT s.name, s.first_surname, SUM(r.xp_points) as xp FROM student s INNER JOIN user u ON u.id = s.id_user INNER JOIN reward r ON u.id = r. id_user_rewarded GROUP BY s.name, s.first_surname ORDER BY SUM(r.xp_points) DESC LIMIT 5";
    db.query(queryString, (err, result)=>{
      if(err){ callback(err, null)};
      
      const recieved = result;
      callback(null, result);
    })
  };

  export {showRanking}