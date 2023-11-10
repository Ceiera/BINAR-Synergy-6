import { raw } from "objection";
import { Car, CarEntity } from "../models/entity/car";
import CarRequest from "../models/dto/car";

class CarsRepository {
  static async getAllCars(): Promise<Car[]> {
    const cars = await CarEntity.query();
    return cars;
  }

  static async getCarById(id: number): Promise<Car[]> {
    const cars = await CarEntity.query().where("id", id);
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

  static async updateCar(id: number, car: CarRequest): Promise<Car[] | null> {
    const updatedCar = await CarEntity.query().where("id", id).update({
      name: car.name,
      cost_per_day: car.cost_per_day,
      size: car.size,
      car_picture_url: car.car_picture_url,
    });
    const newData = this.getCarById(id);
    return newData;
  }

  static async deleteCar(id: number): Promise<string> {
    try {
      const deletedCar = await CarEntity.query().where("id", id).del();
      return "Success"
    } catch (error) {
      return "Failed"
    }
  }
}

export default CarsRepository;