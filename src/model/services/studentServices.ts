import {Student} from "../types/student.js";
import {db} from "../../config.js";
import {OkPacket, RowDataPacket} from "mysql2";
import {User} from "../types/user.js";

function createStudent(student: Student, callback: Function){
    const queryString = "INSERT INTO student (name, first_surname, second_surname, email_personal, email_activa, phone_number, zip_code, id_user) VALUES (?, ?, ?, ?, ?, ?, ?, ?)"
  
    db.query(
      queryString,
      [student.name, student.firstSurname, student.secondSurname, student.personalEmailAddress, student.activaEmailAddress, student.phoneNumber, student.zipCode, student.idUser],
      (err, result) => {
        if (err) {callback(err, null)};
        
        const insertId = (<OkPacket> result).insertId;
        callback(null, insertId);
      }
    
    );
  };

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

function findAllStudents(callback:Function){
  const queryString = "SELECT id, name, first_surname, second_surname, email_personal, email_activa, phone_number, zip_code FROM student";
  db.query(queryString, (err, result)=>{
    if(err) callback(err, null);
  
    const students = result;
    callback(null, students);
  } )
};

function findAllUsers(callback:Function){
  const queryString = "SELECT * FROM users";
  db.query(queryString, (err, result)=>{
    if(err) callback(err, null);
  
    const users = result;
    callback(null, users);
  } )
};




export {createStudent,findAllStudents,createUser,findAllUsers};