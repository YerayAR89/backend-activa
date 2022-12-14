import { db } from "../../../config.js";
import { User } from "../../../model/types/users";
import express from 'express';
import axios from "axios";
import bcrypt from 'bcrypt';
import jsonwebtoken from 'jsonwebtoken';
import dotenv from 'dotenv';

async function userValidation(req: express.Request, res: express.Response) {

    const result = await axios.get(`http://localhost:3000/users/${req.body.email}`);
    if (result.data) {
        const user: User = result.data;
        if (await bcrypt.compare(req.body.password, user.password)) {
            const token = jsonwebtoken.sign({ "email": user.email, "role": user.role, "id": user.id }, process.env.SESSION_SECRET!)
            req.session.token = token;
            res.status(200).json(token);
        } else {
            res.render("index", { errorMessage: "El usuario y la contraseña no coinciden" });
            console.log("no coincide");
        }
    } else {
        res.render("index", { errorMessage: "404. No existe ese usuario" });
        console.log("no existe");
    }

}

export { userValidation };