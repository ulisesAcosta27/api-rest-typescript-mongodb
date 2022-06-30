import express, { Express } from "express";
import dotenv from "dotenv";
import morgan from 'morgan'
dotenv.config();

import "./config/database";
import DogsRouter from "./routes/Dogs.routes";

const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'))

app.use("/dogs", DogsRouter);

app.listen(3000);
console.log("Server is running on port 3000");
