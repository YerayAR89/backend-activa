import express from 'express';
import { pointsHistory } from '../../model/services/rewardServices.js';
import { PointHistory } from '../../model/types/points.js'

async function getPointsHistory(req: express.Request, res: express.Response) {
    pointsHistory((err: Error, points: PointHistory[]) => {
        if (err) {
            return res.status(404).json({ "message": err.message });
        }
        res.status(200).json(points);
    })
}

export { getPointsHistory };