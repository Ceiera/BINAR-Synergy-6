import { raw } from "objection";
import { Car, CarEntity } from "../models/entity/car";
import CarRequest from "../models/dto/car";

class CarsRepository {
  static async getAllCars(): Promise<Car[]> {
    const cars = await CarEntity.query().select("*");
    return cars;
  }

  static async getCarById(id: number): Promise<Car[]> {
    const cars = await CarEntity.query().where("id", id).select("*");
    return cars;
  }

  static async createCar(car: CarRequest): Promise<Car> {
    const newCar = await CarEntity.query().insert({
      name: car.name,
      cost_per_day: car.cost_per_day,
      size: car.size,
      car_picture_url: car.car_picture_url,
    });
    return newCar;
  }

  static async updateCar(id: number, car: CarRequest): Promise<Car | null> {
    const updatedCar = await CarEntity.query().where("id", id).update({
      name: car.name,
      cost_per_day: car.cost_per_day,
      size: car.size,
      car_picture_url: car.car_picture_url,
    });
    return updatedCar;
  }

  static async deleteCar(id: number): Promise<Car> {
    const deletedCar = await CarEntity.query().where("id", id).del();
    return deletedCar;
  }
}

export default CarsRepository;