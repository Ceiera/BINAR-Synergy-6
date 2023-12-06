import { useState, ChangeEvent } from "react";
import { Input, Select, Button } from "antd";

const AddCars = () => {
  const [carsName, setCarsName] = useState("");
  const [costPerDay, setCostPerDay] = useState("");
  const [size, setSize] = useState("");
  const [carPicture, setCarPicture] = useState<File | undefined>();
  const [preview, setPreview] = useState<string | ArrayBuffer | null>(null);
  const [buttonLoading, setButtonLoading] = useState(false);

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.id == "cars-name") {
      setCarsName(e.target.value);
    } else if (e.target.id == "cost-per-day") {
      setCostPerDay(e.target.value);
    } else if (e.target.id == "size") {
      console.log;
      setSize(e.target.value);
    } else if (e.target.id == "car-picture") {
      setCarPicture(e.target.files?.[0]);
      const carPicture = new FileReader();

      carPicture.onload = function () {
        setPreview(carPicture.result);
      };

      carPicture.readAsDataURL(e.target.files?.[0]);
    }
  };
  const handleSubmit = async () => {
    setButtonLoading(true);
    const formData = new FormData();
    formData.append("name", carsName);
    formData.append("cost_per_day", costPerDay);
    formData.append("size", size);
    formData.append("car_picture", carPicture!);
    const response = await fetch(
      import.meta.env.VITE_BACKEND_URL + "api/cars",
      {
        method: "POST",
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
          contentType: "multipart/form-data",
        },
        body: formData,
      }
    );
    const result = await response.json();
    console.log(result);
    setButtonLoading(false);
  };
  return (
    <>
      <div className="flex flex-col">
        <div className="flex flex-col">
          <label htmlFor="cars-name">Cars Name</label>
          <Input
            id="cars-name"
            name="cars-name"
            value={carsName}
            onChange={handleInput}
          ></Input>
        </div>
        <div className="flex flex-col">
          <label htmlFor="cost-per-day">Cost Per Day</label>
          <Input
            id="cost-per-day"
            name="cost-per-day"
            value={costPerDay}
            onChange={handleInput}
          ></Input>
        </div>
        <div className="flex flex-col">
          <label htmlFor="size">Size</label>
          <Select
            id="size"
            value={size || "Pilih Ukuran"}
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
            onChange={(nilai) => setSize(nilai)}
          ></Select>
        </div>
        <div className="flex flex-col">
          <label htmlFor="car-picture">Car Picture</label>
          <Input type="file" id="car-picture" onChange={handleInput}></Input>
          {preview && (
            <p>
              <img src={preview as string} alt="" />
            </p>
          )}
        </div>
        <Button type="default" onClick={handleSubmit} loading={buttonLoading}>
          Submit
        </Button>
      </div>
    </>
  );
};

export default AddCars;
