"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findOneUser = exports.informAllUsers = void 0;
//import {Reward} from "../types/reward.js";
const config_js_1 = require("../../config.js");
function informAllUsers(callback) {
    const queryString = "SELECT u.id, s.name, s.first_surname, u.role, u.email FROM student s INNER JOIN user u ON u.id = s.id_user";
    console.log(queryString);
    config_js_1.db.query(queryString, (err, result) => {
        if (err)
            callback(err, null);
        const usersinfo = result;
        callback(null, usersinfo);
    });
}
exports.informAllUsers = informAllUsers;
;
function findOneUser(idUser, callback) {
    const queryString = "SELECT * FROM student s INNER JOIN user u ON u.id = s.id_user WHERE u.id = ?";
    config_js_1.db.query(queryString, [idUser], (err, result) => {
        if (err)
            callback(err, null);
        const returnUserFound = result[0];
        callback(null, returnUserFound);
    });
}
exports.findOneUser = findOneUser;
