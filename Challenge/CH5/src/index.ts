import express, { Application } from "express";
import dotenv from "dotenv";
import CarsRouter from "./routes/cars";
dotenv.config();

const app: Application = express();
const port = process.env.PORT || 8081;
app.use(express.json());
app.use(CarsRouter);

const listen = app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
