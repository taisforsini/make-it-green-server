"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const createCart_1 = __importDefault(require("./createCart"));
const deleteItemFromCart_1 = __importDefault(require("./deleteItemFromCart"));
const getCart_1 = __importDefault(require("./getCart"));
const updateCart_1 = __importDefault(require("./updateCart"));
const CartRouter = (0, express_1.Router)();
CartRouter.post("/:userId", createCart_1.default);
CartRouter.get("/:userId", getCart_1.default);
CartRouter.put("/:id", updateCart_1.default);
CartRouter.delete("/cart/:id", deleteItemFromCart_1.default);
exports.default = CartRouter;
