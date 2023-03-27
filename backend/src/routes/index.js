import { Router } from "express";
import auth from "./authRouter.js";

const routers = Router();

routers.use(auth);


export default routers;