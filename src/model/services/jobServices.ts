import { db } from "../../config.js";
import { Job } from '../../model/types/jobs.js';
import { OkPacket, RowDataPacket } from "mysql2";

function findAllStudentsJobs(callback: Function) {
    const queryString = "SELECT name,id,company,start_date,finish_date, description, current_work, id_student FROM job";
    db.query(queryString, (err, result) => {
        if (err) callback(err, null);

        const students = result;
        callback(null, students);
    })
}

function findOneStudentJobs(id: string, callback: Function) {

    const queryString = "SELECT name,id,company,start_date,finish_date, description, current_work, id_student FROM job WHERE id = ?";
    db.query(queryString, [id], (err, result) => {
        if (err) { callback(err, null) };

        const studentJobFound: Job = (<RowDataPacket>result)[0];
        callback(null, studentJobFound);
    })
};



export { findAllStudentsJobs, findOneStudentJobs };