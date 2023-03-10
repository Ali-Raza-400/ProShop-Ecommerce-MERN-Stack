import express from "express";
import color from 'colors'
import dotenv from "dotenv";
import ConnectDB from "./conn/db.js";
dotenv.config();
const app = express();
import productRoutes from './routes/productRoutes.js'
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";
ConnectDB();
app.use("/api/products",productRoutes)
app.use(notFound)
app.use(errorHandler)
const port = process.env.PORT || 4000;
app.listen(
  4000,
  console.log(`Listen port in ${process.env.NODE_ENV} at ${port}`.yellow.bold )
);
