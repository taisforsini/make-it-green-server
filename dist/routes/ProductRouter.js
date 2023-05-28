"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const getProducts_1 = __importDefault(require("./getProducts"));
const ProductRouter = (0, express_1.Router)();
ProductRouter.get("/", getProducts_1.default);
exports.default = ProductRouter;
