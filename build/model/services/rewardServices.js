"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createReward = void 0;
const config_js_1 = require("../../config.js");
function createReward(reward, callback) {
    const queryString = "INSERT INTO reward (id_user_sender, id_user_rewarded, xp_points, date, description) VALUES (1, ?, ?, CURRENT_TIMESTAMP(), ?)";
    config_js_1.db.query(queryString, [reward.idUserRewarded, reward.xpPoints, reward.description], (err, result) => {
        if (err) {
            callback(err, null);
        }
        ;
        const insertId = result.insertId;
        callback(null, insertId);
    });
    console.log(queryString);
}
exports.createReward = createReward;
;
