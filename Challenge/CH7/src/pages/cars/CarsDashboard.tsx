import { useState, useEffect } from "react";
import { Card } from "antd";
interface Cars {
  id: number;
  name: string;
  cost_per_day: number;
  size: string;
  car_picture_url: string;
}
const Meta = Card.Meta;
const CarsDashboard = () => {
  const [listCars, setListCars] = useState([]);
  const getListCars = async () => {
    const response = await fetch(
      import.meta.env.VITE_BACKEND_URL + "api/cars",
      {
        method: "GET",
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
        },
      }
    );
    const result = await response.json();
    const listOfCars = await result.data;
    setListCars(listOfCars);
    console.log(listOfCars);
  };
  useEffect(() => {
    getListCars();
  }, []);
  return (
    <>
      <div className="flex flex-wrap gap-x-6">
        {listCars.map((cars: Cars) => (
          <Card
            key={cars.id}
            style={{ width: 300, height: 300 }}
            cover={<img src={cars.car_picture_url} alt="" />}
          >
            <Meta title={cars.name} description={`Rp. ${cars.cost_per_day}`}></Meta>
          </Card>
        ))}
      </div>
    </>
  );
};

export default CarsDashboard;
