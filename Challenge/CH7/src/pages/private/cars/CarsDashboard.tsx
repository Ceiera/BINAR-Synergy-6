import { useState, useEffect } from "react";
import CardCars from "../../../components/organism/CardCars";
import CarEntity from "../../../models/entity/Car";
import SideBar from "../../../components/organism/SideBar";
import SideBarDetail from "../../../components/organism/SideBarDetail";
import SideBarDetailEntity from "../../../models/entity/SideBarDetail";
import Header from "../../../components/organism/Header";
import { ChevronRightIcon, PlusIcon } from "@heroicons/react/24/solid";
import { Button } from "antd";
import { Link } from "react-router-dom";

const CarsDashboard = () => {
  const [listCars, setListCars] = useState([]);
  const [renderCars, setRenderCars] = useState([]);
  const sideBarDetail: SideBarDetailEntity = {
    name: "Cars",
    element: [
      {
        nameElement: "List Cars",
        link: "/cars",
      },
    ],
  };
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
    setRenderCars(listOfCars);
  };
  useEffect(() => {
    getListCars();
  }, []);

  const filterCar = (size: string) => {
    if (size === "ALL") {
      setRenderCars(listCars);
    } else {
      const filteredCars = listCars.filter(
        (car: CarEntity) => car.size === size
      );
      setRenderCars(filteredCars);
    }
  };

  return (
    <>
      <div className="flex flex-row h-full min-h-[100vh] overflow-hidden">
        <div className="flex flex-row sticky">
          <SideBar />
          <SideBarDetail item={sideBarDetail} />
        </div>
        <div className="content flex flex-col w-full">
          <Header />
          <div className="main px-[1.5rem] flex flex-col pt-[2rem] bg-primary-darkblue01 gap-y-6 h-full overflow-y-auto">
            <div className="flex flex-row text-[0.75rem]">
              <p className="font-bold text-neutral-05">Cars</p>
              <ChevronRightIcon className="w-5" />
              <p className="text-neutral-04">List Cars</p>
            </div>
            <div className="flex flex-row justify-between">
              <p className="font-bold text-[1.25rem]">List Cars</p>
              <Link to={"/cars/add"}>
                <Button className="bg-primary-darkblue04 font-bold flex flex-row place-content-center hover:bg-primary-darkblue03" size="large" type="primary">
                  <span><PlusIcon className="w-5"/></span>Add New Cars
                </Button>
              </Link>
            </div>
            <div className="button-filter flex flex-row gap-x-4">
              <Button
                className="py-[0.5rem] px-[0.75rem] border-primary-darkblue02 bg-neutral-01 text-primary-darkblue02 font-bold hover:bg-primary-darkblue01 hover:border-primary-darkblue04 hover:text-primary-darkblue04"
                size="large"
                onClick={() => filterCar("ALL")}
              >
                All
              </Button>
              <Button
                className="py-[0.5rem] px-[0.75rem] border-primary-darkblue02 bg-neutral-01 text-primary-darkblue02 font-bold hover:bg-primary-darkblue01 hover:border-primary-darkblue04 hover:text-primary-darkblue04"
                size="large"
                onClick={() => filterCar("S")}
              >
                Small
              </Button>
              <Button
                className="py-[0.5rem] px-[0.75rem] border-primary-darkblue02 bg-neutral-01 text-primary-darkblue02 font-bold hover:bg-primary-darkblue01 hover:border-primary-darkblue04 hover:text-primary-darkblue04"
                size="large"
                onClick={() => filterCar("M")}
              >
                Medium
              </Button>
              <Button
                className="py-[0.5rem] px-[0.75rem] border-primary-darkblue02 bg-neutral-01 text-primary-darkblue02 font-bold hover:bg-primary-darkblue01 hover:border-primary-darkblue04 hover:text-primary-darkblue04"
                size="large"
                onClick={() => filterCar("L")}
              >
                Large
              </Button>
            </div>
            <div className="cars-container flex flex-wrap gap-4 justify-between">
              {renderCars.map((car: CarEntity) => (
                <CardCars key={car.id} item={car} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarsDashboard;
