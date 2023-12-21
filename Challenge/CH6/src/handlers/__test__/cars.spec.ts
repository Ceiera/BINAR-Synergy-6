import request from "supertest";
import server from "../..";
import CarsRepository from "../../repositories/cars";
import path from "path";
import { beforeEach, afterEach } from "node:test";

const testImagePath = "./test_image/test.png";
const testImageFile = path.resolve(__dirname, testImagePath);
const testCars = {
  carsName: "Test",
  costPerDay: "1000",
  size: "L",
};

afterEach(() => {
  server.close();
});

//supertest post create car
describe("POST /api/cars", () => {
  it("should return 201 and car", async () => {
    const email = "superadmin@gmail.com";
    const password = "12345678";
    const responseLogin = await request(server)
      .post("/api/login")
      .set("Accept", "application/json")
      .send({ email, password });

    let token = responseLogin.body.data.token;

    const responseCreateCars = await request(server)
      .post("/api/cars")
      .set("Authorization", `${token}`)
      .field("name", testCars.carsName)
      .field("cost_per_day", testCars.costPerDay)
      .field("size", testCars.size)
      .attach("car_picture", testImageFile);

    const car = await responseCreateCars.body.data;

    expect(car.name).toEqual(testCars.carsName);
    expect(car.cost_per_day).toEqual(testCars.costPerDay);
    expect(car.size).toEqual(testCars.size);
    expect(responseCreateCars.statusCode).toEqual(201);
  });
});

// supertest get all cars
describe("GET /api/cars", () => {
  it("should return 200 and cars", async () => {
    const email = "superadmin@gmail.com";
    const password = "12345678";

    const responseLogin = await request(server)
      .post("/api/login")
      .set("Accept", "application/json")
      .send({ email, password });

    let token = responseLogin.body.data.token;

    //post cars if not exist

    const responseGetCars = await request(server)
      .get("/api/cars")
      .set("Authorization", `${token}`)
      .set("Accept", "application/json");

    expect(responseGetCars.statusCode).toEqual(200);
    expect(responseGetCars.body.data).not.toBe(null);
  });
});

//supertest get car by id
describe("GET /api/cars/:id", () => {
  it("should return 200 and car by id", async () => {
    const email = "superadmin@gmail.com";
    const password = "12345678";
    const responseLogin = await request(server)
      .post("/api/login")
      .set("Accept", "application/json")
      .send({ email, password });

    let token = responseLogin.body.data.token;

    const responseGetCars = await request(server)
      .get("/api/cars")
      .set("Authorization", `${token}`)
      .set("Accept", "application/json");

    const idCar = responseGetCars.body.data[0].id;
    const responseGetCarById = await request(server)
      .get("/api/cars/" + idCar)
      .set("Authorization", `${token}`)
      .set("Accept", "application/json");

    expect(responseGetCarById.body.data.id).toEqual(idCar);
    expect(responseGetCarById.statusCode).toEqual(200);
    expect(responseGetCarById.body.data).not.toBe(null);
  });
});

//get cars by size
describe("GET /api/cars/:id", () => {
  it("should return 200 and car by id", async () => {
    const email = "superadmin@gmail.com";
    const password = "12345678";
    const responseLogin = await request(server)
      .post("/api/login")
      .set("Accept", "application/json")
      .send({ email, password });

    let token = responseLogin.body.data.token;

    let size = "L";
    const responseGetCarBySize = await request(server)
      .get("/api/cars/size?size=" + size)
      .set("Authorization", `${token}`)
      .set("Accept", "application/json");
    expect(responseGetCarBySize.statusCode).toEqual(200);
  });
});

//supertest delete car by id

describe("PATCH /api/cars", () => {
  it("should return 200 and car", async () => {
    const email = "superadmin@gmail.com";
    const password = "12345678";
    const responseLogin = await request(server)
      .post("/api/login")
      .set("Accept", "application/json")
      .send({ email, password });

    let token = responseLogin.body.data.token;

    const responseCreateCars = await request(server)
      .post("/api/cars")
      .set("Authorization", `${token}`)
      .field("name", testCars.carsName)
      .field("cost_per_day", testCars.costPerDay)
      .field("size", testCars.size)
      .attach("car_picture", testImageFile);

    const editCars = {
      carsName: "TestEdited",
      costPerDay: "10000",
      size: "M",
    };

    const responsePatchCar = await request(server)
      .patch("/api/cars/" + responseCreateCars.body.data.id)
      .set("Authorization", `${token}`)
      .field("name", editCars.carsName)
      .field("cost_per_day", editCars.costPerDay)
      .field("size", editCars.size)
      .attach("car_picture", testImageFile);

    const car = await responsePatchCar.body.data;

    expect(car.name).toEqual(editCars.carsName);
    expect(car.cost_per_day).toEqual(editCars.costPerDay);
    expect(car.size).toEqual(editCars.size);
    expect(responsePatchCar.statusCode).toEqual(200);
  });
});

describe("DELETE /api/cars/:id", () => {
  it("should return 200", async () => {
    const email = "superadmin@gmail.com";
    const password = "12345678";
    const responseLogin = await request(server)
      .post("/api/login")
      .set("Accept", "application/json")
      .send({ email, password });

    let token = responseLogin.body.data.token;
    const responseGetCars = await request(server)
      .get("/api/cars")
      .set("Authorization", `${token}`)
      .set("Accept", "application/json");

    const idCar = responseGetCars.body.data[0].id;
    const responseGetCarById = await request(server)
      .delete("/api/cars/" + idCar)
      .set("Authorization", `${token}`)
      .set("Accept", "application/json");

    expect(responseGetCarById.statusCode).toEqual(200);
    expect(responseGetCarById.body.data).not.toBe(null);
  });
});
