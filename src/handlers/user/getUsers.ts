import express from 'express';
import { User } from '../../model/types/user.js';
import {findAllUsers} from '../../model/services/userServices.js';

async function getUsers(req: express.Request, res: express.Response){
    findAllUsers((err:Error, users:User[])=>{
        if(err){
            return res.status(404).json({"message": err.message});
        }
        console.log(typeof(users[0]));
        res.status(200).json(users);
    })
}

export {getUsers};