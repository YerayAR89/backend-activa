import express from 'express';
import { Training } from "../../model/types/training";
import { findOneStudentTraining } from '../../model/services/studentTraining.js';


async function getOneStudentTraining(req: express.Request, res: express.Response) {
    const studentId = req.params.id_training;
    findOneStudentTraining(studentId, (err: Error, result: Training) => {
        if (err) {
            res.status(404).json({ "message": err.message });
        }
        res.status(200).json(result);
    })
}

export { getOneStudentTraining }