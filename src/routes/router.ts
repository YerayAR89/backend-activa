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
import { getRanking } from '../handlers/ranking/getRanking.js';
import { getRankingList } from '../handlers/ranking/getRanking&PointsList.js';
import { getPointsHistory } from '../handlers/reward/getpointsHistory.js';
import { getRankingPosition } from '../handlers/ranking/getRaningPosition.js';
import { pruebaId } from '../utils/prueba.js';



const router = express.Router();

router.post("/students", insertStudent);

router.get("/students", getStudents);

router.get("/students/:id_student", getOneStudent);

router.get("/miperfil", getStudentProfile);

router.delete("/students/:id_student", validateToken, userIsAdmin, deleteStudent);

router.post("/users", validateToken, userIsAdmin, insertUser);

router.post("/logUser", userValidation);

router.get("/", (req: express.Request, res: express.Response) => {
    res.status(200).render("index", { errorMessage: "" });
});

router.get('/puntos', (req, res) => {
    res.render("puntos")
})

router.get("/users/:user_email", getOneUser);

router.get('/users', (req, res) => {
    res.render("users")
})

router.get("/misPuntosRecibidos", incomingPoints);

router.get("/scores", getRanking);

router.get("/ranking", getRankingList);

router.get("/pointsHistory", getPointsHistory);

router.get("/position", getRankingPosition);


export { router };