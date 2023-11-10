import CarsService from "../services/cars";
import CarRequest from "../models/dto/car";
import { DefaultResponse } from "../models/dto/default";
import { Request, Response } from "express";
import { Car } from "../models/entity/car";

class CarsHandler {
  static async getAllCars(req: Request, res: Response): Promise<any> {
    try {
      const cars: Car[] = await CarsService.getAllCars();
      const response: DefaultResponse = {
        status: "OK",
        message: "Success retrived data cars",
        data: cars,
      };
      return res.status(200).send(response);
    } catch (error) {
      const response: DefaultResponse = {
        status: "ERROR",
        message: "Failed retrived data cars",
        data: [],
      };
      return res.status(500).send(response);
    }
  }

  async getCarById(req: Request, res: Response): Promise<any> {
    try {
      const cars: Car[] = await CarsService.getAllCars();
      const response: DefaultResponse = {
        status: "OK",
        message: "Success retrived data cars",
        data: cars,
      };
      return res.status(200).send(response);
    } catch (error) {
      const response: DefaultResponse = {
        status: "ERROR",
        message: "Failed retrived data cars",
        data: [],
      };
      return res.status(500).send(response);
    }
  }

  async createCar(req: Request, res: Response): Promise<any> {
      try {
        const newCar: Car = await CarsService.createCar(req.body);
        const response: DefaultResponse = {
          status: "OK",
          message: "Success retrived data cars",
          data: newCar,
        };
        return res.status(201).send(response);
      } catch (error) {
        
      }
  }
}
