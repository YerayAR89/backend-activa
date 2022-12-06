import express from 'express';
import axios from 'axios';

async function getRankingList(req: express.Request, res: express.Response) {
    const targetRanking = await axios("http://localhost:3000/scores");
    res.render("ranking", {
        ranking: targetRanking.data
    });
}

export {getRankingList}