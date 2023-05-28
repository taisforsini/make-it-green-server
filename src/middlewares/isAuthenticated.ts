import { Request, Response, NextFunction } from "express";
import { expressjwt } from "express-jwt";
import { RequestHandler } from "express-serve-static-core";

const extractTokenFromHeaders = (req: Request) => {
  if (!req.headers.authorization) {
    throw new Error("Missing Authorization Header.");
  }
  return req.headers.authorization.split(" ")[1];
};

const isAuthenticated: RequestHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  expressjwt({
    secret: process.env.TOKEN_SIGN_SECRET!,
    getToken: extractTokenFromHeaders,
    algorithms: ["HS256"],
  })(req, res, next);
};

export default isAuthenticated;
