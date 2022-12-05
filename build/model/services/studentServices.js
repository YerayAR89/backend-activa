"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertOneUser = exports.findOneUser = exports.findOneStudent = exports.createUser = exports.deleteOneStudent = exports.findAllStudents = exports.createStudent = void 0;
const config_js_1 = require("../../config.js");
const bcrypt_1 = __importDefault(require("bcrypt"));
function createStudent(student, callback) {
    const queryString = "INSERT INTO student (name, first_surname, second_surname, email_personal, email_activa, phone_number, zip_code) VALUES (?, ?, ?, ?, ?, ?, ?)";
    config_js_1.db.query(queryString, [student.name, student.firstSurname, student.secondSurname, student.personalEmailAddress, student.activaEmailAddress, student.phoneNumber, student.zipCode], (err, result) => {
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
function deleteOneStudent(id, callback) {
    const queryString = "DELETE FROM student WHERE id = ?";
    config_js_1.db.query(queryString, [id], (err, result) => {
        if (err) {
            callback(err, null);
        }
        ;
        const studentDeleted = "deleted succesfull";
        callback(null, studentDeleted);
    });
}
exports.deleteOneStudent = deleteOneStudent;
;
function createUser(user, callback) {
    const queryString = "INSERT INTO user (email, password, role) VALUES (?, ?, ?)";
    config_js_1.db.query(queryString, [user.email, user.password, user.role], (err, result) => {
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
function findOneUser(user_email, callback) {
    const queryString = "SELECT id, email, password, role FROM user WHERE email = ?";
    config_js_1.db.query(queryString, [user_email], (err, result) => {
        if (err) {
            callback(err, null);
        }
        ;
        const userFound = result[0];
        callback(null, userFound);
    });
}
exports.findOneUser = findOneUser;
;
function insertOneUser(user, callback) {
    return __awaiter(this, void 0, void 0, function* () {
        const queryString = "INSERT INTO user(email, password, role, created_at) VALUES(?, ?, ?, NOW())";
        const hashPassword = yield bcrypt_1.default.hash(user.password, 10);
        config_js_1.db.query(queryString, [user.email, hashPassword, user.role], (err, result) => {
            if (err) {
                callback(err, null);
            }
            const userId = result.insertId;
            callback(null, userId);
        });
    });
}
exports.insertOneUser = insertOneUser;
function findOneStudent(id, callback) {
    const queryString = "SELECT id, name, first_surname, second_surname, email_personal, email_activa, phone_number, zip_code, activa_points_balance FROM student WHERE id = ?";
    config_js_1.db.query(queryString, [id], (err, result) => {
        if (err) {
            callback(err, null);
        }
        ;
        const studentFound = result[0];
        callback(null, studentFound);
    });
}
exports.findOneStudent = findOneStudent;
;
