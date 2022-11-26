import {Studentusereward} from "../../model/types/studentusereward.js"
import express from 'express';
import {informAllUsers} from "../../model/services/studentuserewardServices.js";

async function getStudentuserewardos(req: express.Request, res: express.Response) {
    informAllUsers((err: Error, studentUseReward: Studentusereward[]) => {
        if (err) {
            return res.status(404).json({ "message": err.message });
        }
        console.log(typeof(studentUseReward[0]));
        res.status(200).json(studentUseReward);
    })
}

export {getStudentuserewardos};