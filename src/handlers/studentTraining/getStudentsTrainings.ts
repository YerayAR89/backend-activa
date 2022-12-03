import express from 'express';
import { findAllStudentsTraining } from '../../model/services/studentTraining.js';
import { Training } from '../../model/types/training.js';

async function getStudentsTraining(req: express.Request, res: express.Response) {
    findAllStudentsTraining((err: Error, result: Training[]) => {
        if (err) {
            return res.status(404).json({ "message": err.message });
        }
        res.status(200).json(result);
    })
}

export { getStudentsTraining };