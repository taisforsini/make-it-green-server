"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CartRouter_1 = __importDefault(require("./CartRouter"));
const UserRouter_1 = __importDefault(require("./UserRouter"));
const ProductRouter_1 = __importDefault(require("./ProductRouter"));
const router = (0, express_1.Router)();
router.use("/cart", CartRouter_1.default);
router.use("/user", UserRouter_1.default);
router.use("/product", ProductRouter_1.default);
exports.default = router;
