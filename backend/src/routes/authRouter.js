
import { Router } from "express";
import { register } from "../controllers/authController.js";
import multer from "multer";
import multerConfigs from '../database/config/multer.js'
import { schemaValidations } from "../Middlewares/SchemaValidationsMiddleware.js";
import registerSchema from "../Middlewares/schemas/registerSchema.js";

const auth = Router();

auth.post('/sign-up', schemaValidations(registerSchema), multer(multerConfigs).single('file') , register);

export default auth;
