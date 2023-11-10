import express, {Application} from "express";
import dotenv from "dotenv";
import CarsHandler from "./handlers/cars";
import fileUpload from "./utils/fileupload";
dotenv.config();


const app:Application = express();
const port = process.env.PORT || 8081
app.use(express.json())

const carsHandler = new CarsHandler();
app.get('/api/cars/size', carsHandler.getCarsBySize);
app.get('/api/cars', carsHandler.getAllCars);
app.get('/api/cars/:id', carsHandler.getCarById);
app.post('/api/cars', fileUpload.single('car_picture'), carsHandler.createCar);
app.patch('/api/cars/:id', fileUpload.single('car_picture'), carsHandler.updateCar);
app.delete('/api/cars/:id', carsHandler.deleteCar);



app.listen(port, ()=> {
    console.log(`Listening on port: ${port}`);
})