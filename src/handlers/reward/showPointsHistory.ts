import express from 'express';
import axios from 'axios';

async function showPointsHistory(req: express.Request, res: express.Response) {
    const pointHistory = await axios("http://localhost:3000/pointsHistory");
    res.render("historialsocial", {
        points: pointHistory.data
    });

}

export { showPointsHistory }