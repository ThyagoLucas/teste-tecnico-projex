import express, { json } from 'express';
import "express-async-errors";
import cors from 'cors';
import routers from './routes/index.js';
import dotenv from 'dotenv';
import errorHandler from './Middlewares/errorHandlerMiddleware.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use(routers);
app.use(errorHandler);

const port = process.env.PORT || 4000;

app.listen(port, ()=>{ console.log(`Server is running on port ${port}`)});

export default app;