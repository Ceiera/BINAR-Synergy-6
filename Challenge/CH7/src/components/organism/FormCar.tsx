import { useState, ChangeEvent, useEffect } from "react";
import { Input, Select, Button } from "antd";
import FormCarProps from "../../models/props/FormCarProps";
import CarEntity from "../../models/entity/Car";
import { Link } from "react-router-dom";
const FormCar = ({ id, method }: FormCarProps) => {
  const [carsName, setCarsName] = useState("");
  const [costPerDay, setCostPerDay] = useState("");
  const [size, setSize] = useState("");
  const [carPicture, setCarPicture] = useState<File | undefined>();
  const [preview, setPreview] = useState<string | ArrayBuffer | null>(null);
  const [buttonLoading, setButtonLoading] = useState(false);
  const [statusError, setStatusError] = useState({
    carsName: false,
    costPerDay: false,
    size: false,
    carPicture: false,
  });
  const editId = id;

  const getCarsInfo = async (id: number) => {
    const response = await fetch(
      import.meta.env.VITE_BACKEND_URL + "api/cars/" + id,
      {
        method: "GET",
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
          "content-type": "application/json",
        },
      }
    );
    const result = await response.json();
    const car: CarEntity = result.data;
    const imageResponse = await fetch(car.car_picture_url);
    const blob = await imageResponse.blob();
    const file = new File([blob], "imageFileName.jpg", { type: "image/jpeg" });
    setCarsName(car.name);
    setCostPerDay(car.cost_per_day.toString());
    setCarPicture(file);
    setSize(car.size);
    setPreview(car.car_picture_url);
  };
  useEffect(() => {
    if (editId) {
      getCarsInfo(editId);
    }
  }, [editId]);

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.id == "cars-name") {
      if (e.target.value !== null) {
        setStatusError({
          ...statusError,
          carsName: false,
        });
      }
      console.log("|" + e.target.value + "|");
      setCarsName(e.target.value);
    } else if (e.target.id == "cost-per-day") {
      if (e.target.value !== null) {
        setStatusError({
          ...statusError,
          costPerDay: false,
        });
      }
      setCostPerDay(e.target.value);
    } else if (e.target.id == "size") {
      if (e.target.value !== null) {
        setStatusError({
          ...statusError,
          size: false,
        });
      }
      setSize(e.target.value);
    } else if (e.target.id == "car-picture") {
      if (e.target.value !== null) {
        setStatusError({
          ...statusError,
          carPicture: false,
        });
      }
      setCarPicture(e.target.files?.[0]);
      const carPicture = new FileReader();
      carPicture.onload = function () {
        setPreview(carPicture.result);
      };
      carPicture.readAsDataURL(e.target.files?.[0] as Blob);
    }
  };
  const handleSubmit = async () => {
    setButtonLoading(true);
    let status = statusError;
    if (carsName == "") {
      status = {
        ...status,
        carsName: true,
      };
    }
    if (costPerDay == "") {
      status = {
        ...status,
        costPerDay: true,
      };
    }
    if (size == "") {
      status = {
        ...status,
        size: true,
      };
    }
    if (carPicture == undefined) {
      status = {
        ...status,
        carPicture: true,
      };
    }

    if (
      status.carsName &&
      status.size &&
      status.carPicture &&
      status.costPerDay
    ) {
      setStatusError(status);
    } else {
      const formData = new FormData();
      formData.append("name", carsName);
      formData.append("cost_per_day", costPerDay);
      formData.append("size", size);
      formData.append("car_picture", carPicture!);
      const response = await fetch(
        import.meta.env.VITE_BACKEND_URL + "api/cars" + (id ? `/${id}` : ""),
        {
          method: method,
          headers: {
            Authorization: `${localStorage.getItem("token")}`,
            contentType: "multipart/form-data",
          },
          body: formData,
        }
      );
      const result = await response.json();
    }

    setButtonLoading(false);
  };

  return (
    <>
      <div className="flex flex-col justify-between">
        <div className=" bg-neutral-01 p-[1rem] shadow">
          <div className="flex flex-col w-[30rem] justify-between gap-y-4">
            <div className="flex flex-row items-center">
              <label htmlFor="cars-name" className="w-[9rem] text-[0.75rem]">
                Cars Name <sup className="text-red-600 text-[0.75rem]">*</sup>
              </label>
              <Input
                id="cars-name"
                name="cars-name"
                value={carsName}
                onInput={handleInput}
                status={statusError.carsName ? "error" : undefined}
              ></Input>
            </div>
            <div className="flex flex-row items-center">
              <label htmlFor="cost-per-day" className="w-[9rem] text-[0.75rem]">
                Cost Per Day{" "}
                <sup className="text-red-600 text-[0.75rem]">*</sup>
              </label>
              <Input
                id="cost-per-day"
                name="cost-per-day"
                value={costPerDay}
                onInput={handleInput}
                status={statusError.costPerDay ? "error" : undefined}
              ></Input>
            </div>
            <div className="flex flex-row items-center">
              <label htmlFor="size" className="w-[9rem] text-[0.75rem]">
                Size <sup className="text-red-600 text-[0.75rem]">*</sup>
              </label>
              <Select
                id="size"
                className="w-full"
                value={size || "Pilih Ukuran"}
                status={statusError.size ? "error" : undefined}
                options={[
                  {
                    value: "S",
                    label: "Small",
                  },
                  {
                    value: "M",
                    label: "Medium",
                  },
                  {
                    value: "L",
                    label: "Large",
                  },
                  {
                    value: "Pilih Ukuran",
                    label: "Pilih Ukuran",
                    disabled: true,
                  },
                ]}
                onSelect={(nilai) => setSize(nilai)}
                onChange={(nilai) => setSize(nilai)}
              ></Select>
            </div>
            <div className="flex flex-row items-center">
              <label htmlFor="car-picture" className="w-[9rem] text-[0.75rem]">
                Car Picture <sup className="text-red-600 text-[0.75rem]">*</sup>
              </label>
              <Input
                status={statusError.carPicture ? "error" : undefined}
                type="file"
                id="car-picture"
                onInput={handleInput}
              ></Input>
            </div>
            {preview && (
              <p>
                <img src={preview as string} alt="" />
              </p>
            )}
          </div>
        </div>

        <div className="action sticky bottom-0">
          <Link to="/cars">
            <Button
              type="default"
              className="border-primary-darkblue04 text-primary-darkblue04 font-bold hover:border-primary-darkblue03 hover:text-primary-darkblue03"
            >
              Cancel
            </Button>
          </Link>
          <Button
            type={"primary"}
            className="bg-primary-darkblue04 text-neutral-01 hover:bg-primary-darkblue03"
            onClick={handleSubmit}
            loading={buttonLoading}
          >
            Save
          </Button>
        </div>
      </div>
    </>
  );
};

export default FormCar;
