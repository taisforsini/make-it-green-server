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
const getUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // // const loggedInUser = req.query.;
        // if (loggedInUser) {
        //   return res.status(200).json(loggedInUser);
        // } else {
        return res.status(404).json({ msg: "User not found." });
        // }
    }
    catch (err) {
        console.error(err);
        return res.status(500).json({ msg: JSON.stringify(err) });
    }
});
exports.default = getUser;
