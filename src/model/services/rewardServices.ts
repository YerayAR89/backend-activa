import { Student } from "../types/student.js";
import { User } from "../types/users.js";
import { db } from "../../config.js";
import { OkPacket, RowDataPacket } from "mysql2";
import bcrypt from 'bcrypt';

function recievedPoints(callback: Function) {
  const queryString = "SELECT student.name, reward.id_user_sender,reward.xp_points, reward.date,reward.description  FROM student INNER JOIN user ON user.id=student.id INNER JOIN reward ON reward.id=user.id";
  db.query(queryString, (err, result) => {
    if (err) { callback(err, null) };
    callback(null, result);
  })
};

function pointsHistory(callback: Function) {
  const queryString = "SELECT sdr.nameS, sdr.fsurnameS, sdr.pointsS, sdr.descriptionS, rwd.nameR, rwd.fsurnameR, sdr.dateS FROM (SELECT s.name nameS, s.first_surname fsurnameS, r.id_user_rewarded id_uS, r.description descriptionS, r.xp_points pointsS, r.date dateS FROM reward r INNER JOIN user u ON r.id_user_sender = u.id INNER JOIN student s ON s.id_user = u.id) AS sdr INNER JOIN (SELECT s.name nameR, s.first_surname fsurnameR, u.id id_uR FROM student s INNER JOIN user u ON s.id_user = u.id) AS rwd ON sdr.id_uS = rwd.id_uR ORDER BY sdr.dateS DESC;";
  db.query(queryString, (err, result) => {
    if (err) { callback(err, null) };
    callback(null, result);
  })
};

export { recievedPoints, pointsHistory }