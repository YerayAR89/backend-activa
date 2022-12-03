import express from 'express';
import axios from 'axios';


async function getStudentProfile(req: express.Request, res: express.Response) {

    const targetStudentId: number = 1; 
    const targetStudent = await axios(`http://localhost:3000/students/${targetStudentId}`);
    res.render("miperfil", {
        student: targetStudent.data
    });
}

export {getStudentProfile}