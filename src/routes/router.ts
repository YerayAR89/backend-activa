import express from 'express';
import { insertStudent } from "../handlers/student/insertStudent.js";
import { getStudents } from '../handlers/student/getStudents.js';
import { insertUser } from '../handlers/student/insertUser.js';
import { getOneStudent } from '../handlers/student/getOneStudent.js';
import { getStudentProfile } from '../handlers/student/getStudentProfile.js';

const router = express.Router();

router.post("/students", insertStudent);

router.get("/students", getStudents);

router.get("/students/:id_student", getOneStudent);

router.get("/miperfil", getStudentProfile);

router.post("/users", insertUser);


export { router };