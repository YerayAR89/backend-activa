import { db } from "../../config.js";
import { Training } from "../types/training.js";
import { OkPacket, RowDataPacket } from "mysql2";

function findAllStudentsTraining(callback: Function) {
    const queryString = "SELECT id,name,center,start_date,finish_date,description,duration,regulated,id_student FROM training";
    db.query(queryString, (err, result) => {
        if (err) callback(err, null);

        const students = result;
        callback(null, students);
    })
}

function findOneStudentTraining(id: string, callback: Function) {

    const queryString = "SELECT id,name,center,start_date,finish_date,description,duration,regulated,id_student FROM training WHERE id = ?";
    db.query(queryString, [id], (err, result) => {
        if (err) { callback(err, null) };

        const studentTrainingFound: Training = (<RowDataPacket>result)[0];
        callback(null, studentTrainingFound);
    })
};



export { findAllStudentsTraining, findOneStudentTraining };