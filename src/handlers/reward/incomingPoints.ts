import express from 'express';
import axios from 'axios';
import { RewardRecieved } from '../../model/types/rewardRecieved.js';
import { recievedPoints } from '../../model/services/rewardServices.js';

async function incomingPoints(req: express.Request, res: express.Response){
    recievedPoints((err:Error, result:RewardRecieved[])=>{
        if(err){
            return res.status(404).json({"message": err.message});
        }
        res.status(200).render("views/puntos", {data: result});
    })
}

export {incomingPoints}