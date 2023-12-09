import CarEntity from "../../models/entity/Car";
import { Button } from "antd";
import CardCarsProps from "../../models/props/CardCarsProps";
import { TrashIcon, PencilIcon } from "@heroicons/react/24/solid";
import { ClockIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const CardCars = ({ item }: CardCarsProps) => {
  const car: CarEntity = item;
  let carDate: string = "No new update";
  if (!car.updated_at) {
    carDate = "Updated at " + new Date(car.created_at!).toLocaleDateString();
  }

  return (
    <>
      <div className="w-[22rem] p-[1.5rem] flex flex-col justify-between gap-y-6 rounded-[0.5rem] bg-white shadow-sm">
        <img src={car.car_picture_url} height={"10rem"} alt="" />
        <div className="info">
          <p className="text-[0.875rem]">{car.name}</p>
          <p className="text-[1rem] font-bold">Rp. {car.cost_per_day} /hari</p>
          <p className="text-[0.875rem] flex flex-row gap-1 items-center">
            <span>
              <ClockIcon className="w-[1.25rem]" />
            </span>
            {carDate}
          </p>
        </div>
        <div className="action flex flex-row justify-center gap-6">
          <Button
            type="default"
            size="large"
            danger
            className="w-full items-center justify-center gap-3 flex flex-row"
          >
            <TrashIcon className="w-[1.25rem]" />
            <p>Delete</p>
          </Button>
          <Link to={"/cars/update/" + car.id}>
            <Button
              type="primary"
              size="large"
              className="w-full flex flex-row items-center justify-center gap-3 bg-primary-limegreen04 hover:bg-primary-limegreen03"
            >
              <PencilIcon className="w-[1.25rem]" />
              <p>Edit</p>
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default CardCars;
