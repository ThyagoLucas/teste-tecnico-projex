
import { Router } from "express";
import { register } from "../controllers/authController.js";
import registerSchema from "../Middlewares/schemas/registerSchema.js";
import { schemaValidations } from "../Middlewares/SchemaValidationsMiddleware.js";

const auth = Router();


auth.get('/sign-up', schemaValidations(registerSchema), register);


export default auth;
