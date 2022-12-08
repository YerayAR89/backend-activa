import express from 'express';
import { Ranking } from '../../model/types/ranking.js';
import { showRankingPosition} from '../../model/services/rankingServices.js';
import { Position } from '../../model/types/position.js';

async function getRankingPosition(req: express.Request, res: express.Response) {
    showRankingPosition((err: Error, position: Position[]) => {
        if (err) {
            return res.status(404).json({ "message": err.message });
        }
        res.status(200).json(position);
    })
}

export { getRankingPosition };