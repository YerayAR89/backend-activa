import express from "express";
import { insertOneUser } from "../../model/services/studentServices.js";
import { User } from "../../model/types/users.js";

function insertUser(req: express.Request, res: express.Response) {
  const newUser: User = req.body;
  insertOneUser(newUser, (err: Error, userId: number) => {
    if (err) {
      res.status(500).json({ "message": err.message });
    } else {
      res.status(200).json({ "userId": userId });
    }

  });
};

export { insertUser };