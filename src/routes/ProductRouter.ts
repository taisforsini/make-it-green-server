import { Router } from "express";
import getProducts from "./getProducts";

const ProductRouter = Router();

ProductRouter.get("/", getProducts);

export default ProductRouter;
