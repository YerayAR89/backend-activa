"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.informAllUsers = void 0;
//import {Reward} from "../types/reward.js";
const config_js_1 = require("../../config.js");
function informAllUsers(callback) {
    const queryString = "SELECT s.name, s.first_surname, u.role, u.email FROM student s INNER JOIN user u ON u.id = s.id_user";
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
