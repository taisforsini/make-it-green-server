import { Request, Response } from "express";
import { prisma } from "../util/prisma";
import { ResponseBuilder } from "../util/http-responses";

const createUser = async (req: Request, res: Response) => {
  try {
    const { email, cpf, name } = req.body;

    const newUser = await prisma.usuario.create({
      data: {
        emailUsuario: email,
        nomeUsuario: name,
        cpfUsuario: cpf.normalize(),
      },
    });

    if (newUser.idUsuario) return ResponseBuilder.created(res);
  } catch (err: any) {
    return ResponseBuilder.internalServerError(res);
  }
};

export default createUser;
