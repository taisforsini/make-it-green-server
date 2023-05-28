import { NextFunction, Request, Response } from "express";
import { prisma } from "../util/prisma";

const attachCurrentUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (!req.user)
      return res.status(400).json({ msg: "User is not logged in." });
    const loggedInUser = Number(req.user);
    const user = await prisma.usuario.findFirst({
      where: { idUsuario: loggedInUser },
    });
    if (!user) {
      return res.status(400).json({ msg: "User does not exist." });
    }
    return next();
  } catch (err) {
    console.error(err);
    return res.status(500).json({ msg: JSON.stringify(err) });
  }
};

export default attachCurrentUser;
