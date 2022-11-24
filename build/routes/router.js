"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const insertStudent_js_1 = require("../handlers/student/insertStudent.js");
const getStudents_js_1 = require("../handlers/student/getStudents.js");
<<<<<<< HEAD
const insertUser_js_1 = require("../handlers/user/insertUser.js");
const getUsers_js_1 = require("../handlers/user/getUsers.js");
=======
const insertUser_js_1 = require("../handlers/student/insertUser.js");
>>>>>>> 0541dc4a19ab4d74ea53108fbf1a0a0275280478
const router = express_1.default.Router();
exports.router = router;
router.post("/students", insertStudent_js_1.insertStudent);
router.get("/students", getStudents_js_1.getStudents);
router.post("/users", insertUser_js_1.insertUser);
<<<<<<< HEAD
router.get("/users", getUsers_js_1.getUsers);
=======
>>>>>>> 0541dc4a19ab4d74ea53108fbf1a0a0275280478
