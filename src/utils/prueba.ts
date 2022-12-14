import { db } from "../config.js";
import { User } from "../model/types/users";
import express, { NextFunction } from 'express';
import axios from "axios";
import bcrypt from 'bcrypt';
import jsonwebtoken from 'jsonwebtoken';
import dotenv from 'dotenv';
import { Ranking } from "../model/types/ranking.js";



function pruebaId(req: express.Request, res: express.Response) {

    const divContainer = document.querySelector(".divContainer")!;

    console.log(1);
    if (req.session.token != undefined) {
        console.log(2);
        const tokenVerified = jsonwebtoken.verify(req.session.token, process.env.SESSION_SECRET!) as jsonwebtoken.JwtPayload
        getUserId();
        console.log(tokenVerified.id);

        function getId(callback: Function) {
            const queryString = `SELECT rkg.rankk, rkg.name, rkg.fsurname, rkg.totalpoints FROM (SELECT pr.pointsr pointsCompanions, pawsr.pointsawsr pointsTech, (pr.pointsr + pawsr.pointsawsr) AS totalpoints, pr.id_user id_user, pr.name name, pr.fsurname fsurname, RANK() OVER (ORDER BY (pr.pointsr + pawsr.pointsawsr) DESC) AS rankk FROM (SELECT s.name name, s.first_surname fsurname, IFNULL(SUM(r.xp_points),0) pointsr, s.id_user id_user FROM student s LEFT JOIN reward r ON s.id_user = r.id_user_rewarded GROUP BY s.name, s.first_surname, s.id_user) AS pr INNER JOIN (SELECT s.name, s.first_surname, IFNULL(SUM(awsr.xp_points),0) pointsawsr, s.id_user id_user FROM student s LEFT JOIN activa_work_student_rel awsr ON s.id = awsr.id_student GROUP BY s.name, s.first_surname, s.id_user) AS pawsr ON pr.id_user = pawsr.id_user ORDER BY totalpoints DESC) AS rkg WHERE rkg.id_user = ${tokenVerified.id}`;
            db.query(queryString, (err, result) => {
                if (err) { callback(err, null) };
                callback(null, result)
            })
        };



        function getUserId() {
            getId((err: Error, rankk: Ranking) => {
                if (err) {
                    return res.status(404).json({ "message": err.message });
                }
                res.status(200).json(rankk);
                divInsert(rankk)

            })


        };


        function divInsert(rankk: any) {
            const card = document.createElement("div");
            card.classList.add("divContainer");

            const studentid = document.createElement("p");
            studentid.textContent = `${rankk.rankk}`

            card.appendChild(studentid);

            divContainer.appendChild(card);

        }

        getUserId();




    }
}

export { pruebaId }