import express from "express";
import {createReward} from "../../model/services/rewardServices.js";
import {Reward} from "../../model/types/reward.js";

async function insertPointsReward (req: express.Request, res: express.Response){
    const newReward: Reward = req.body;
    createReward(newReward, (err: Error, rewardId: number) => {
      if (err) {
        return res.status(500).json({"message": err.message});
      }
  
      res.status(200).json({"orderId": rewardId});
    });
};

export {insertPointsReward};