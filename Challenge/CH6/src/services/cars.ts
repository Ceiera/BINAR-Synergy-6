import CarRequest from "../models/dto/car";
import CarsRepository from "../repositories/cars";
import { Car } from "../models/entity/car";

class CarsService {
  static async getAllCars(): Promise<Car[]> {
    const cars = await CarsRepository.getAllCars();
    return cars;
  }
  static async getCarById(id: number): Promise<Car[]> {
    const cars = await CarsRepository.getCarById(id);
    return cars;
  }
  static async updateCar(id: number, car: CarRequest): Promise<Car[] | null> {
    const updatedCar = await CarsRepository.updateCar(id, car);
    return updatedCar;
  }
  static async createCar(car: CarRequest): Promise<Car> {
    const newCar = await CarsRepository.createCar(car);
    return newCar;
  }
  static async deleteCar(id: number): Promise<String> {
    const deletedCar = await CarsRepository.deleteCar(id);
    return deletedCar;
  }
  static async getCarsBySize(size: string): Promise<Car[] > {
    const cars:Car[] = await CarsRepository.getAllCars();
    const filteredCars:Car[] = cars.filter((car) => {
      if (car.size === size) {
        return car;
      }
    });
    return filteredCars;
  }
}

export default CarsService;
