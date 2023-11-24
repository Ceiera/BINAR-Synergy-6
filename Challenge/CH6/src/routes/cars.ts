import express, { Router } from "express";
import CarsHandler from "../handlers/cars";
import fileUpload from "../utils/fileupload";

const CarsRouter:Router = express.Router();

const carsHandler = new CarsHandler();

CarsRouter.get('/api/cars/size', carsHandler.getCarsBySize);
CarsRouter.get('/api/cars', carsHandler.getAllCars);
CarsRouter.get('/api/cars/:id', carsHandler.getCarById);
CarsRouter.post('/api/cars', fileUpload.single('car_picture'), carsHandler.createCar);
CarsRouter.patch('/api/cars/:id', fileUpload.single('car_picture'), carsHandler.updateCar);
CarsRouter.delete('/api/cars/:id', carsHandler.deleteCar);

export default CarsRouter;