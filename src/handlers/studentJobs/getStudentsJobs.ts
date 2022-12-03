import express from 'express';
import { findAllStudentsJobs } from '../../model/services/jobServices.js';
import { Job } from '../../model/types/jobs.js';

async function getStudentsJobs(req: express.Request, res: express.Response) {
    findAllStudentsJobs((err: Error, result: Job[]) => {
        if (err) {
            return res.status(404).json({ "message": err.message });
        }
        res.status(200).json(result);
    })
}

export { getStudentsJobs };