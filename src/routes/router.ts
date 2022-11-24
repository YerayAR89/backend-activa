import express from 'express';
import { insertStudent } from "../handlers/student/insertStudent.js";
import { getStudents } from '../handlers/student/getStudents.js';
import { insertUser } from '../handlers/student/insertUser.js';

const router = express.Router();

router.post("/students", insertStudent);

router.get("/students", getStudents);

router.post("/users", insertUser);


export { router };