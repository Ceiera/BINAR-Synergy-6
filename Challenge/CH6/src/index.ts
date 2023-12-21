import express, { Application } from "express";
import dotenv from "dotenv";
import CarsRouter from "./routes/cars";
import AuthRouter from "./routes/auth";
import UserRouter from "./routes/users";
import cors from "cors";
dotenv.config();

const app: Application = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(AuthRouter);
app.use(CarsRouter);
app.use(UserRouter);

// const listen = app.listen(port, () => {
//   console.log(`Listening on port: ${port}`);
// });
const server = app.listen(port, () => {
})
export default server