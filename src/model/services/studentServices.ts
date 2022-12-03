import {Student} from "../types/student.js";
import { User } from "../types/users.js";
import {db} from "../../config.js";
import {OkPacket, RowDataPacket} from "mysql2";
import bcrypt from 'bcrypt';

function createStudent(student: Student, callback: Function){
    const queryString = "INSERT INTO student (name, first_surname, second_surname, email_personal, email_activa, phone_number, zip_code) VALUES (?, ?, ?, ?, ?, ?, ?)"
  
    db.query(
      queryString,
      [student.name, student.firstSurname, student.secondSurname, student.personalEmailAddress, student.activaEmailAddress, student.phoneNumber, student.zipCode],
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
  }

  function deleteOneStudent(id: string, callback: Function){
    const queryString = "DELETE FROM student WHERE id = ?";
    db.query(queryString, [id], (err, result)=>{
      if(err){ callback(err, null)};
      
      const studentDeleted:String = "deleted succesfull";
     
      callback(null, studentDeleted);
    })
  };

  function createUser(user: User, callback: Function){
    const queryString = "INSERT INTO user (email, password, role) VALUES (?, ?, ?)"
  
    db.query(
      queryString,
      [user.email, user.password, user.role],
      (err, result) => {
        if (err) {callback(err, null)};
        
        const insertId = (<OkPacket> result).insertId;
        callback(null, insertId);
      }
    );
  };

  function findOneUser(user_email: string, callback: Function){
 
    const queryString = "SELECT id, email, password, role FROM user WHERE email = ?";
    db.query(queryString, [user_email], (err, result)=>{
      if(err){ 
        callback(err, null);
      };
      const userFound: User = (<RowDataPacket>result)[0];
      callback(null, userFound);
    })
  };

  async function insertOneUser(user: User, callback: Function){
    const queryString = "INSERT INTO user(email, password, role, created_at) VALUES(?, ?, ?, NOW())";
    const hashPassword = await bcrypt.hash(user.password, 10);
    db.query(queryString, [user.email, hashPassword, user.role], (err, result)=>{
      if (err) {
        callback(err, null);
      }
      const userId = (<OkPacket> result).insertId;
      callback(null, userId);
    });
}

  function findOneStudent(id: string, callback: Function){
 
    const queryString = "SELECT id, name, first_surname, second_surname, email_personal, email_activa, phone_number, zip_code, activa_points_balance FROM student WHERE id = ?";
    db.query(queryString, [id], (err, result)=>{
      if(err){ callback(err, null)};
      
      const studentFound: Student = (<RowDataPacket>result)[0];
      callback(null, studentFound);
    })
  };
  


  export {createStudent,findAllStudents, deleteOneStudent, createUser, findOneStudent, findOneUser, insertOneUser};