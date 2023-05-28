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
// const generateToken = require("../config/jwt.config");
const login = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // const { email, password } = req.body;
        // const user = await prisma.usuario.findFirst({
        //   where: { emailUsuario: email },
        // });
        // if (!user) {
        //   return res
        //     .status(400)
        //     .json({ msg: "This email is not yet registered in our website;" });
        // }
        // if (await bcrypt.compare(password, user.senhaUsuario)) {
        //   const token = generateToken(user);
        //   return res.status(200).json({
        //     user,
        //     token,
        //   });
        // } else {
        //   return res.status(401).json({ msg: "Wrong password or email" });
        // }
    }
    catch (err) {
        return res.status(500).json({ msg: JSON.stringify(err) });
    }
});
exports.default = login;
