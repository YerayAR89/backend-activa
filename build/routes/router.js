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
const getStudentsJobs_js_1 = require("../handlers/studentJobs/getStudentsJobs.js");
const getOneStudentJobs_js_1 = require("../handlers/studentJobs/getOneStudentJobs.js");
const getStudentsTrainings_js_1 = require("../handlers/studentTraining/getStudentsTrainings.js");
const getOneStudentTraining_js_1 = require("../handlers/studentTraining/getOneStudentTraining.js");
const router = express_1.default.Router();
exports.router = router;
router.post("/students", insertStudent_js_1.insertStudent);
router.get("/students", getStudents_js_1.getStudents);
router.get("/students/:id_student", getOneStudent_js_1.getOneStudent);
router.get("/miperfil", getStudentProfile_js_1.getStudentProfile);
router.post("/users", insertUser_js_1.insertUser);
router.get("/rewards"); //todo endpoint tabla reward
router.get("/jobs", getStudentsJobs_js_1.getStudentsJobs);
router.get("/jobs/:id_job", getOneStudentJobs_js_1.getOneStudentJobs);
router.get("/training", getStudentsTrainings_js_1.getStudentsTraining);
router.get("/training/:id_training", getOneStudentTraining_js_1.getOneStudentTraining);
//router.get("") //TODO
router.get('/', (req, res) => {
    res.render("index");
});
router.get('/puntos', (req, res) => {
    res.render("puntos");
});
router.get('/ranking', (req, res) => {
    res.render("ranking");
});
router.get('/users', (req, res) => {
    res.render("users");
});
