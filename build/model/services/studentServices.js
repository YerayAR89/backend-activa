"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAllUsers = exports.createUser = exports.findAllStudents = exports.createStudent = void 0;
const config_js_1 = require("../../config.js");
function createStudent(student, callback) {
    const queryString = "INSERT INTO student (name, first_surname, second_surname, email_personal, email_activa, phone_number, zip_code, id_user) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
    config_js_1.db.query(queryString, [student.name, student.firstSurname, student.secondSurname, student.personalEmailAddress, student.activaEmailAddress, student.phoneNumber, student.zipCode, student.idUser], (err, result) => {
        if (err) {
            callback(err, null);
        }
        ;
        const insertId = result.insertId;
        callback(null, insertId);
    });
}
exports.createStudent = createStudent;
;
function createUser(user, callback) {
    const queryString = "INSERT INTO user (email, password, role) VALUES (?, ?, ?)";
    config_js_1.db.query(queryString, [user.activaEmailAddress, user.password, user.role], (err, result) => {
        if (err) {
            callback(err, null);
        }
        ;
        const insertId = result.insertId;
        callback(null, insertId);
    });
}
exports.createUser = createUser;
;
function findAllStudents(callback) {
    const queryString = "SELECT id, name, first_surname, second_surname, email_personal, email_activa, phone_number, zip_code FROM student";
    config_js_1.db.query(queryString, (err, result) => {
        if (err)
            callback(err, null);
        const students = result;
        callback(null, students);
    });
}
exports.findAllStudents = findAllStudents;
;
function findAllUsers(callback) {
    const queryString = "SELECT * FROM users";
    config_js_1.db.query(queryString, (err, result) => {
        if (err)
            callback(err, null);
        const users = result;
        callback(null, users);
    });
}
exports.findAllUsers = findAllUsers;
;
