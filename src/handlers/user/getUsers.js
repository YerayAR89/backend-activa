var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { findAllUsers } from '../../model/services/studentServices.js';
function getUsers(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        findAllUsers((err, users) => {
            if (err) {
                return res.status(404).json({ "message": err.message });
            }
            console.log(typeof (users[0]));
            res.status(200).json(users);
        });
    });
}
export { getUsers };
