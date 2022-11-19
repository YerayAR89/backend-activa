var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { findAllStudents } from '../../model/services/studentServices.js';
function getStudents(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        findAllStudents((err, students) => {
            if (err) {
                return res.status(404).json({ "message": err.message });
            }
            console.log(typeof (students[0]));
            res.status(200).json(students);
        });
    });
}
export { getStudents };
