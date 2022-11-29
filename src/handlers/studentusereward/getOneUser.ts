import express from 'express';
import {findOneUser} from '../../model/services/studentuserewardServices.js';
import { Studentusereward } from '../../model/types/studentusereward.js';

async function getOneUser(req: express.Request, res: express.Response){
    const userId = req.params.id_user;
    findOneUser(userId, (err: Error, result: Studentusereward)=>{
        if(err){
            res.status(404).json({"message": err.message});
        }
        res.status(200).json(result);
    })
}

export {getOneUser};