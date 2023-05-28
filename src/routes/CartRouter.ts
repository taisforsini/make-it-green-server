import { Router } from "express";
import createCart from "./createCart";

const CartRouter = Router();

CartRouter.post("/", createCart);

export default CartRouter;
