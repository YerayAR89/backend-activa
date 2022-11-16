import express from 'express';
import {insertStudent} from "../handlers/student/insertStudent.js";
import {getStudents} from '../handlers/student/getStudents.js';

const router = express.Router();

router.post("/students",insertStudent);

router.get("/students", getStudents);

export {router};