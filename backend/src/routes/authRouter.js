
import { Router } from "express";
import { signUp, signIn } from "../controllers/authController.js";
import multer from "multer";
import multerConfigs from '../database/config/multer.js'
import { schemaValidations } from "../Middlewares/SchemaValidationsMiddleware.js";
import registerSchema from "../Middlewares/schemas/registerSchema.js";
import loginSchema from "../Middlewares/schemas/loginSchema.js";

const auth = Router();

auth.post('/sign-up', schemaValidations(registerSchema), multer(multerConfigs).single('file') , signUp);
auth.post('/sign-in', schemaValidations(loginSchema), signIn);

export default auth;
