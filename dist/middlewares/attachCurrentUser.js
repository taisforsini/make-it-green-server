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
const prisma_1 = require("../util/prisma");
const attachCurrentUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!req.user)
            return res.status(400).json({ msg: "User is not logged in." });
        const loggedInUser = Number(req.user);
        const user = yield prisma_1.prisma.usuario.findFirst({
            where: { idUsuario: loggedInUser },
        });
        if (!user) {
            return res.status(400).json({ msg: "User does not exist." });
        }
        return next();
    }
    catch (err) {
        console.error(err);
        return res.status(500).json({ msg: JSON.stringify(err) });
    }
});
exports.default = attachCurrentUser;
