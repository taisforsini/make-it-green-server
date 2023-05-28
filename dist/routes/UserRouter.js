"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const createUser_1 = __importDefault(require("./createUser"));
const getUser_1 = __importDefault(require("./getUser"));
const login_1 = __importDefault(require("./login"));
const UserRouter = (0, express_1.Router)();
UserRouter.post("/new-user", createUser_1.default);
UserRouter.post("/login", login_1.default);
UserRouter.get("/user", getUser_1.default);
exports.default = UserRouter;
