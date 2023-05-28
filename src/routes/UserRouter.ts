import { Router } from "express";
import createUser from "./createUser";
import login from "./login";
import updateUser from "./updateUser";

const UserRouter = Router();

UserRouter.post("/new-user", createUser);
UserRouter.put("/update-user", updateUser);
// UserRouter.post("/login", login);

export default UserRouter;
