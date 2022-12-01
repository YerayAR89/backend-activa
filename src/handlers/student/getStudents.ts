import express from 'express';
import { Student } from '../../model/types/student.js';
import { findAllStudents } from '../../model/services/studentServices.js';

async function getStudents(req: express.Request, res: express.Response) {
    findAllStudents((err: Error, result: Student[]) => {
        if (err) {
            return res.status(404).json({ "message": err.message });
        }
        res.status(200).json(result);
    })
}

export { getStudents };