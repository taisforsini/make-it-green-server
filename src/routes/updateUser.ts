import { NextFunction, Request, Response } from "express";
import { prisma } from "../util/prisma";
import { ResponseBuilder } from "../util/http-responses";

const updateUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, cpf, name } = req.body;

    const user = await prisma.usuario.update({
      data: {
        emailUsuario: email,
        nomeUsuario: name,
      },
      where: {
        cpfUsuario: cpf,
      },
    });

    if (user.idUsuario) return ResponseBuilder.ok(res);
  } catch (err: any) {
    return ResponseBuilder.internalServerError(res);
  }
};

export default updateUser;
