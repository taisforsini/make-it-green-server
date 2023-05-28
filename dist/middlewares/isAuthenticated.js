"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_jwt_1 = require("express-jwt");
const extractTokenFromHeaders = (req) => {
    if (!req.headers.authorization) {
        throw new Error("Missing Authorization Header.");
    }
    return req.headers.authorization.split(" ")[1];
};
const isAuthenticated = (req, res, next) => {
    (0, express_jwt_1.expressjwt)({
        secret: process.env.TOKEN_SIGN_SECRET,
        getToken: extractTokenFromHeaders,
        algorithms: ["HS256"],
    })(req, res, next);
};
exports.default = isAuthenticated;
