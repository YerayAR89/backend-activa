import express from 'express';
import { insertStudent } from "../handlers/student/insertStudent.js";
import { getStudents } from '../handlers/student/getStudents.js';
import { insertUser } from '../handlers/student/insertUser.js';
import { getOneStudent } from '../handlers/student/getOneStudent.js';
import { getStudentProfile } from '../handlers/student/getStudentProfile.js';
import { getStudentsJobs } from '../handlers/studentJobs/getStudentsJobs.js';
import { getOneStudentJobs } from '../handlers/studentJobs/getOneStudentJobs.js';
import { getStudentsTraining } from '../handlers/studentTraining/getStudentsTrainings.js';
import { getOneStudentTraining } from '../handlers/studentTraining/getOneStudentTraining.js';

const router = express.Router();

router.post("/students", insertStudent);

router.get("/students", getStudents);

router.get("/students/:id_student", getOneStudent);

router.get("/miperfil", getStudentProfile);

router.post("/users", insertUser);

router.get("/rewards",)  //todo endpoint tabla reward

router.get("/jobs", getStudentsJobs);

router.get("/jobs/:id_job", getOneStudentJobs);

router.get("/training", getStudentsTraining)

router.get("/training/:id_training", getOneStudentTraining)

//router.get("") //TODO

router.get('/', (req, res) => {
    res.render("index")
})

router.get('/puntos', (req, res) => {
    res.render("puntos")
})

router.get('/ranking', (req, res) => {
    res.render("ranking")
})

router.get('/users', (req, res) => {
    res.render("users")
})

export { router };