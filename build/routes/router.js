"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const insertStudent_js_1 = require("../handlers/student/insertStudent.js");
const getStudents_js_1 = require("../handlers/student/getStudents.js");
const insertUser_js_1 = require("../handlers/student/insertUser.js");
const getOneStudent_js_1 = require("../handlers/student/getOneStudent.js");
const getStudentProfile_js_1 = require("../handlers/student/getStudentProfile.js");
const logUser_js_1 = require("../handlers/student/log/logUser.js");
const getOneUser_js_1 = require("../handlers/student/getOneUser.js");
const deleteStudent_js_1 = require("../handlers/student/deleteStudent.js");
const validateToken_js_1 = require("../utils/validateToken.js");
const userIsAdmin_js_1 = require("../utils/userIsAdmin.js");
const incomingPoints_js_1 = require("../handlers/reward/incomingPoints.js");
const getRanking_js_1 = require("../handlers/ranking/getRanking.js");
const getRanking_PointsList_js_1 = require("../handlers/ranking/getRanking&PointsList.js");
const getpointsHistory_js_1 = require("../handlers/reward/getpointsHistory.js");
const getRaningPosition_js_1 = require("../handlers/ranking/getRaningPosition.js");
const router = express_1.default.Router();
exports.router = router;
router.post("/students", insertStudent_js_1.insertStudent);
router.get("/students", getStudents_js_1.getStudents);
router.get("/students/:id_student", getOneStudent_js_1.getOneStudent);
router.get("/miperfil", getStudentProfile_js_1.getStudentProfile);
router.delete("/students/:id_student", validateToken_js_1.validateToken, userIsAdmin_js_1.userIsAdmin, deleteStudent_js_1.deleteStudent);
router.post("/users", validateToken_js_1.validateToken, userIsAdmin_js_1.userIsAdmin, insertUser_js_1.insertUser);
router.post("/logUser", logUser_js_1.userValidation);
router.get("/", (req, res) => {
    res.status(200).render("index", { errorMessage: "" });
});
router.get('/puntos', (req, res) => {
    res.render("puntos");
});
router.get("/users/:user_email", getOneUser_js_1.getOneUser);
router.get('/users', (req, res) => {
    res.render("users");
});
router.get("/misPuntosRecibidos", incomingPoints_js_1.incomingPoints);
router.get("/scores", getRanking_js_1.getRanking);
router.get("/ranking", getRanking_PointsList_js_1.getRankingList);
router.get("/pointsHistory", getpointsHistory_js_1.getPointsHistory);
router.get("/position", getRaningPosition_js_1.getRankingPosition);
