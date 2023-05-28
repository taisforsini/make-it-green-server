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
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, cpf, name } = req.body;
        const newUser = yield prisma_1.prisma.usuario.create({
            data: {
                emailUsuario: email,
                nomeUsuario: name,
                cpfUsuario: cpf,
            },
        });
        if (newUser.idUsuario)
            return http_responses_1.ResponseBuilder.created(res);
    }
    catch (err) {
        return http_responses_1.ResponseBuilder.internalServerError(res);
    }
});
exports.default = createUser;
