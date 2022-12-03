import express from 'express';
import { insertStudent } from "../handlers/student/insertStudent.js";
import { getStudents } from '../handlers/student/getStudents.js';
import { insertUser } from '../handlers/student/insertUser.js';
import { getOneStudent } from '../handlers/student/getOneStudent.js';
import { getStudentProfile } from '../handlers/student/getStudentProfile.js';
import { userValidation } from '../handlers/student/log/logUser.js';
import { getOneUser } from '../handlers/student/getOneUser.js';
import { deleteStudent } from '../handlers/student/deleteStudent.js';
import { validateToken } from '../utils/validateToken.js';
import { userIsAdmin } from '../utils/userIsAdmin.js';
import { incomingPoints } from '../handlers/reward/incomingPoints.js';

const router = express.Router();

router.post("/students", insertStudent);

router.get("/students", getStudents);

router.get("/students/:id_student", getOneStudent);

router.get("/miperfil", getStudentProfile);

router.delete("/students/:id_student", validateToken, userIsAdmin ,deleteStudent);

router.post("/users", insertUser);

router.post("/index", userValidation);

router.get("/users/:user_email", getOneUser);

router.get('/users', (req, res) => {
    res.render("users")
})

router.get("/misPuntosRecibidos", incomingPoints);


export { router };