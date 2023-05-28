import { NextFunction, Request, Response, Router } from "express";
import { prisma } from "../util/prisma";
import bcrypt from "bcrypt";
// const generateToken = require("../config/jwt.config");

const login = async (req: Request, res: Response, next: NextFunction) => {
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
  } catch (err) {
    return res.status(500).json({ msg: JSON.stringify(err) });
  }
};

export default login;
