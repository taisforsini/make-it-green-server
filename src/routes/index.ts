import { Router } from "express";
import CartRouter from "./CartRouter";
import UserRouter from "./UserRouter";
import ProductRouter from "./ProductRouter";

const router = Router();

router.use("/cart", CartRouter);
router.use("/user", UserRouter);
router.use("/product", ProductRouter);

export default router;
