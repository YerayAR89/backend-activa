"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAllUsers = exports.createUser = void 0;
const config_js_1 = require("../../config.js");
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
