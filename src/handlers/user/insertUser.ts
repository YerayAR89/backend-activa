import express from "express";
import {createUser} from "../../model/services/userServices.js";
import {User} from "../../model/types/user.js";

async function insertUser(req: express.Request, res: express.Response){
    const newUser: User = req.body;
    createUser(newUser, (err: Error, userId: number) => {
      if (err) {
        return res.status(500).json({"message": err.message});
      }
  
      res.status(200).json({"orderId": userId});
    });
};

export {insertUser};