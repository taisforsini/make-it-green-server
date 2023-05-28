"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseBuilder = void 0;
const http_status_codes_1 = require("http-status-codes");
const ok = (res, data) => {
    return createResponse(res, http_status_codes_1.OK, data);
};
const accepted = (res, data) => {
    return createResponse(res, http_status_codes_1.ACCEPTED, data);
};
const multiStatus = (res, data) => {
    return createResponse(res, http_status_codes_1.MULTI_STATUS, data);
};
const badRequest = (res, data) => {
    return createResponse(res, http_status_codes_1.BAD_REQUEST, data);
};
const notFound = (res, data) => {
    return createResponse(res, http_status_codes_1.NOT_FOUND, data);
};
const internalServerError = (res, data) => {
    return createResponse(res, http_status_codes_1.INTERNAL_SERVER_ERROR, data);
};
const forbidden = (res, data) => {
    return createResponse(res, http_status_codes_1.FORBIDDEN, data);
};
const unauthorized = (res, data) => {
    return createResponse(res, http_status_codes_1.UNAUTHORIZED, data);
};
const created = (res, data) => {
    return createResponse(res, http_status_codes_1.CREATED, data);
};
const noContent = (res, data) => {
    return createResponse(res, http_status_codes_1.NO_CONTENT, data);
};
const paymentRequired = (res, data) => {
    return createResponse(res, http_status_codes_1.PAYMENT_REQUIRED, data);
};
const notImplemented = (res, data) => {
    return createResponse(res, http_status_codes_1.NOT_IMPLEMENTED, data);
};
const serviceUnavailable = (res, data) => {
    return createResponse(res, http_status_codes_1.SERVICE_UNAVAILABLE, data);
};
const buildJson = (data) => {
    if (!data)
        return;
    if (typeof data === "string")
        return { message: data };
    return data;
};
const createResponse = (res, code, data) => {
    const json = buildJson(data);
    if (!json)
        return res.status(code).end();
    return res.status(code).json(json).end();
};
const ResponseBuilder = {
    accepted,
    badRequest,
    created,
    forbidden,
    internalServerError,
    multiStatus,
    noContent,
    notFound,
    notImplemented,
    ok,
    paymentRequired,
    serviceUnavailable,
    unauthorized,
};
exports.ResponseBuilder = ResponseBuilder;
