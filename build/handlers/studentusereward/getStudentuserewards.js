"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStudentuserewardos = void 0;
const studentuserewardServices_js_1 = require("../../model/services/studentuserewardServices.js");
function getStudentuserewardos(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        (0, studentuserewardServices_js_1.informAllUsers)((err, studentUseReward) => {
            if (err) {
                return res.status(404).json({ "message": err.message });
            }
            console.log(typeof (studentUseReward[0]));
            res.status(200).json(studentUseReward);
        });
    });
}
exports.getStudentuserewardos = getStudentuserewardos;
