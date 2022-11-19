import { db } from "../../config.js";
function createStudent(student, callback) {
    const queryString = "INSERT INTO student (name, first_surname, second_surname, email_personal, email_activa, phone_number, zip_code, id_user) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
    db.query(queryString, [student.name, student.firstSurname, student.secondSurname, student.personalEmailAddress, student.activaEmailAddress, student.phoneNumber, student.zipCode, student.idUser], (err, result) => {
        if (err) {
            callback(err, null);
        }
        ;
        const insertId = result.insertId;
        callback(null, insertId);
        console.log(queryString);
    });
}
;
function createUser(user, callback) {
    const queryString = "INSERT INTO user (email, password, role) VALUES (?, ?, ?)";
    db.query(queryString, [user.activaEmailAddress, user.password, user.role], (err, result) => {
        if (err) {
            callback(err, null);
        }
        ;
        const insertId = result.insertId;
        callback(null, insertId);
    });
}
;
function findAllStudents(callback) {
    const queryString = "SELECT id, name, first_surname, second_surname, email_personal, email_activa, phone_number, zip_code FROM student";
    db.query(queryString, (err, result) => {
        if (err)
            callback(err, null);
        const students = result;
        callback(null, students);
    });
}
;
function findAllUsers(callback) {
    const queryString = "SELECT * FROM users";
    db.query(queryString, (err, result) => {
        if (err)
            callback(err, null);
        const users = result;
        callback(null, users);
    });
}
;
export { createStudent, findAllStudents, createUser, findAllUsers };
