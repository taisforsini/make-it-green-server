import { prisma } from "../util/prisma";
import { Request, Response } from "express";
import { ResponseBuilder } from "../util/http-responses";

export interface Vendor {
  id: number;
  cnpj: string;
  name: string;
}

export interface Product {
  createdAt: Date;
  desc: string | null;
  price: number;
  productCategory: string | null;
  productId: number;
  soldAmount: number | null;
  vendor: Vendor;
}

const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await prisma.produto.findMany({
      include: { vendedor: true },
    });

    if (!products) return ResponseBuilder.internalServerError(res);

    const parsedProducts: Product[] = products.map((product) => {
      return {
        createdAt: product.createdAt,
        productCategory: product.categoriaProduto,
        desc: product.descProduto,
        productId: product.idProduto,
        price: Number(product.precoProduto),
        soldAmount: product.quantidadeVendida,
        vendor: {
          name: product.compensa_aoProduto,
          id: product.vendedor.idVendedor,
          cnpj: product.vendedor.razaosocialVendedor,
        },
      };
    });

    return ResponseBuilder.ok(res, parsedProducts);
  } catch (err) {
    return ResponseBuilder.internalServerError(res);
  }
};

export default getProducts;
