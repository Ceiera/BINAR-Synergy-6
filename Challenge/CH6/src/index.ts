import express, { Application } from "express";
import dotenv from "dotenv";
import CarsRouter from "./routes/cars";
import AuthRouter from "./routes/auth";
import UserRouter from "./routes/users";
dotenv.config();

const app: Application = express();
const port = process.env.PORT || 5000;
app.use(express.json());
app.use(AuthRouter);
app.use(CarsRouter);
app.use(UserRouter);

console.log(process.env.POSTGRESQL_DATABASE);

console.log(process.env.POSTGRESQL_USER);
console.log(process.env.POSTGRESQL_PASSWORD);

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
