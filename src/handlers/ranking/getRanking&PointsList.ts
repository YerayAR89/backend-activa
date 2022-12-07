import express from 'express';
import axios from 'axios';

async function getRankingList(req: express.Request, res: express.Response) {
    const targetRanking = await axios("http://localhost:3000/scores");
    const pointHistory = await axios("http://localhost:3000/pointsHistory");
    res.render("ranking", {
        ranking: targetRanking.data,
        points: pointHistory.data
    });
}

export { getRankingList }

