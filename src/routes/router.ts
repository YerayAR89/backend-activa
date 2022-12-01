import express from 'express';
import {insertStudent} from "../handlers/student/insertStudent.js";
import {getStudents} from '../handlers/student/getStudents.js';
import {insertUser} from "../handlers/user/insertUser.js";
import {getUsers} from "../handlers/user/getUsers.js";
import {getStudentuserewardos} from '../handlers/studentusereward/getstudentuserewards.js';
import { getOneUser } from '../handlers/studentusereward/getOneUser.js';
import { renderHelloWorldView } from '../handlers/utils/HelloWorldView.js';
import { renderMisPuntos} from '../handlers/utils/misPuntos.js';
import { insertPointsReward } from '../handlers/reward/insertPointsReward.js';
const router = express.Router();


router.post("/students", insertStudent);

router.get("/students", getStudents);

router.post("/users", insertUser);

router.get("/users", getUsers);

router.get("/studentuserewards", getStudentuserewardos);

router.get("/studentuserewards/:id_user", getOneUser);

router.get("/saluda", renderHelloWorldView);

router.get("/mispuntos", renderMisPuntos);

router.post("/mispuntos/:id_reward", insertPointsReward);

export {router};
