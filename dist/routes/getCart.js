"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = require("../util/prisma");
const http_responses_1 = require("../util/http-responses");
const getCart = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const loggedInUser = req.query.currentUserId;
        const cart = yield prisma_1.prisma.carrinho.findFirst({
            where: {
                usuario: { idUsuario: Number(loggedInUser) },
            },
        });
        if (!cart)
            return http_responses_1.ResponseBuilder.badRequest(res);
        return http_responses_1.ResponseBuilder.ok(res, cart);
    }
    catch (err) {
        return http_responses_1.ResponseBuilder.internalServerError(res);
    }
});
exports.default = getCart;
