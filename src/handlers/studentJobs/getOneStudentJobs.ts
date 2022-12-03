import express from 'express';
import { Job } from "../../model/types/jobs";
import { findOneStudentJobs } from '../../model/services/jobServices.js';


async function getOneStudentJobs(req: express.Request, res: express.Response) {
    const studentId = req.params.id_job;
    findOneStudentJobs(studentId, (err: Error, result: Job) => {
        if (err) {
            res.status(404).json({ "message": err.message });
        }
        res.status(200).json(result);
    })
}

export { getOneStudentJobs }