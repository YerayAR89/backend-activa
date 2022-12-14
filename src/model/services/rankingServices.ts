import { db } from "../../config.js";


function showRanking(callback: Function) {
  const queryString = "SELECT pr.pointsr pointsCompanions, pawsr.pointsawsr pointsTech, (pr.pointsr + pawsr.pointsawsr) AS totalpoints, pr.id_user, pr.name, pr.fsurname FROM (SELECT s.name name, s.first_surname fsurname, IFNULL(SUM(r.xp_points),0) pointsr, s.id_user id_user FROM student s LEFT JOIN reward r ON s.id_user = r.id_user_rewarded GROUP BY s.name, s.first_surname, s.id_user) AS pr INNER JOIN (SELECT s.name, s.first_surname, IFNULL(SUM(awsr.xp_points),0) pointsawsr, s.id_user id_user FROM student s LEFT JOIN activa_work_student_rel awsr ON s.id = awsr.id_student GROUP BY s.name, s.first_surname, s.id_user) AS pawsr ON pr.id_user = pawsr.id_user ORDER BY totalpoints DESC";
  db.query(queryString, (err, result) => {
    if (err) { callback(err, null) };

    const recieved = result;
    callback(null, result);
  })
};

function showRankingPosition(callback: Function) {

  const queryString = `SELECT rkg.rankk, rkg.name, rkg.fsurname, rkg.totalpoints FROM (SELECT pr.pointsr pointsCompanions, pawsr.pointsawsr pointsTech, (pr.pointsr + pawsr.pointsawsr) AS totalpoints, pr.id_user id_user, pr.name name, pr.fsurname fsurname, RANK() OVER (ORDER BY (pr.pointsr + pawsr.pointsawsr) DESC) AS rankk FROM (SELECT s.name name, s.first_surname fsurname, IFNULL(SUM(r.xp_points),0) pointsr, s.id_user id_user FROM student s LEFT JOIN reward r ON s.id_user = r.id_user_rewarded GROUP BY s.name, s.first_surname, s.id_user) AS pr INNER JOIN (SELECT s.name, s.first_surname, IFNULL(SUM(awsr.xp_points),0) pointsawsr, s.id_user id_user FROM student s LEFT JOIN activa_work_student_rel awsr ON s.id = awsr.id_student GROUP BY s.name, s.first_surname, s.id_user) AS pawsr ON pr.id_user = pawsr.id_user ORDER BY totalpoints DESC) AS rkg WHERE rkg.id_user = ${1}`;
  db.query(queryString, (err, result) => {
    if (err) { callback(err, null) };

    const recieved = result;
    callback(null, result);
  })
}//la id por defecto del usuario es 2 en esta query y está dentro de la misma

export { showRanking, showRankingPosition }