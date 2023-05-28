import { Request } from "express";

declare global {
  namespace Express {
    interface Request extends Request {
      user: string;
      currentUser: string;
    }
  }
}
