import { NextFunction, Request, Response } from "express";
import { prisma } from "../util/prisma";
import { ResponseBuilder } from "../util/http-responses";

const createCart = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { cpf, quantity, productName } = req.body;

    const getUserByCpf = await prisma.usuario.findUnique({
      where: { cpfUsuario: cpf.normalize() },
    });

    if (!getUserByCpf?.idUsuario) return ResponseBuilder.badRequest(res);

    const getProductByName = await prisma.produto.findFirst({
      where: { compensa_aoProduto: productName },
    });

    if (!getProductByName?.idProduto) return ResponseBuilder.badRequest(res);

    const cart = await prisma.carrinho.create({
      data: {
        idUsuario: getUserByCpf!.idUsuario,
        quantidade: quantity,
        idProduto: getProductByName.idProduto,
      },
    });

    if (cart.idcarrinho) return ResponseBuilder.created(res);
  } catch (err: any) {
    return ResponseBuilder.internalServerError(res);
  }
};

export default createCart;
