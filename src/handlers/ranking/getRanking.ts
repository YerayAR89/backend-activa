import express from 'express';
import { Ranking } from '../../model/types/ranking.js';
import { showRanking } from '../../model/services/rankingServices.js';

async function getRanking(req: express.Request, res: express.Response) {
    showRanking((err: Error, ranking: Ranking[]) => {
        if (err) {
            return res.status(404).json({ "message": err.message });
        }
        res.status(200).json(ranking);
    })
}

export { getRanking };