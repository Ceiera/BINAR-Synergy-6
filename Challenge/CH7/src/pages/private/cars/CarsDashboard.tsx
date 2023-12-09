import { useState, useEffect } from "react";
import CardCars from "../../../components/organism/CardCars";
import CarEntity from "../../../models/entity/Car";
import SideBar from "../../../components/organism/SideBar";
import SideBarDetail from "../../../components/organism/SideBarDetail";
import SideBarDetailEntity from "../../../models/entity/SideBarDetail";
import Header from "../../../components/organism/Header";
import { ChevronRightIcon, PlusIcon } from "@heroicons/react/24/solid";
import { Button } from "antd";
import { Link, useLocation, useNavigate } from "react-router-dom";

interface Page {
  breadcrumb: {
    isChilderen: boolean;
    nameChildren: string;
  };
  h3: string;
  button: {
    visible: boolean;
  };
}

const CarsDashboard = () => {
  const [listCars, setListCars] = useState([]);
  const [renderCars, setRenderCars] = useState([]);
  const [sideBarDetailVisible, setSideBarDetailVisible] = useState(false);
  const [deleteCarsId, setDeleteCarsId] = useState<number>();
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertDetail, setAlertDetail] = useState({
    className: "",
    message: "",
  });
  const location = useLocation();
  const page: Page = {
    breadcrumb: {
      isChilderen: false,
      nameChildren: "",
    },
    h3: "List Cars",
    button: {
      visible: true,
    },
  };
  const navigate = useNavigate();
  const [dialogDeleteVisible, setdialogDeleteVisible] = useState(false);

  const sideBarDetail: SideBarDetailEntity = {
    name: "Cars",
    element: [
      {
        nameElement: "List Cars",
        link: "/cars",
      },
    ],
  };

  const alertDismiss = () => {
    setTimeout(() => setAlertVisible(false), 3000);
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

  const validationAlert = () => {
    if (location.state.alert === "success") {
      setAlertDetail({
        className:
          "bg-alert-success w-[34.375rem] py-4 px-3 justify-center rounded text-center",
        message: "Data Berhasil Disimpan",
      });
      setAlertVisible(true);
      alertDismiss();
    } else if (location.state.alert === "error") {
      setAlertDetail({
        className:
          "bg-alert-danger w-[34.375rem] py-4 px-3 justify-center rounded text-center",
        message: "Data Gagal Disimpan",
      });
      setAlertVisible(true);
      alertDismiss();
    } else if (location.state.alert === "delete") {
      setAlertDetail({
        className:
          "bg-alert-danger w-[34.375rem] py-4 px-3 justify-center rounded text-center",
        message: "Data Berhasil Dihapus",
      });
      setAlertVisible(true);
      alertDismiss();
    }
  };

  useEffect(() => {
    getListCars();
    if (location.state) {
      validationAlert();
    }
  }, [location]);

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
  const handleCloseSideBar = () => {
    setSideBarDetailVisible(!sideBarDetailVisible);
  };

  const onDelete = async (id: number) => {
    setDeleteCarsId(id);
    setdialogDeleteVisible(!dialogDeleteVisible);
  };
  const handleDialogYes = async () => {
    const response = await fetch(
      import.meta.env.VITE_BACKEND_URL + "api/cars/" + deleteCarsId,
      {
        method: "DELETE",
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
        },
      }
    );
    if (response.status != 200) {
      navigate("/cars", { state: { alert: "error" } });
    } else {
      navigate("/cars", { state: { alert: "delete" } });
    }
    setdialogDeleteVisible(!dialogDeleteVisible);
  };

  const handleDialogTidak = () => {
    setdialogDeleteVisible(!dialogDeleteVisible);
  };

  return (
    <>
      <div className="flex flex-row h-full min-h-[100vh] overflow-hidden relative">
        <div className="flex flex-row sticky">
          <SideBar />
          {sideBarDetailVisible && <SideBarDetail item={sideBarDetail} />}
        </div>
        <div className="content flex flex-col w-full">
          <Header closeSideBar={handleCloseSideBar} />
          <div className="main px-[1.5rem] flex flex-col pt-[2rem] bg-primary-darkblue01 gap-y-6 h-full overflow-y-auto relative">
            {alertVisible && (
              <>
                <div className="absolute inset-x-0 top-5 left-1/4">
                  <div className={alertDetail.className}>
                    <p className="text-neutral-01 font-bold">
                      {alertDetail.message}
                    </p>
                  </div>
                </div>
              </>
            )}
            <div className="flex flex-row text-[0.75rem]">
              <p className="font-bold text-neutral-05">Cars</p>
              <ChevronRightIcon className="w-5" />
              <p
                className={
                  page.breadcrumb.isChilderen
                    ? "font-bold text-neutral-05"
                    : "text-neutral-04"
                }
              >
                List Cars
              </p>
              {page.breadcrumb.isChilderen && (
                <>
                  <ChevronRightIcon className="w-5" />
                  <p className="text-neutral-04">
                    {page.breadcrumb.nameChildren}
                  </p>
                </>
              )}
            </div>
            <div className="flex flex-row justify-between">
              <p className="font-bold text-[1.25rem]">{page.h3}</p>

              <Link to={"/cars/create"}>
                <Button
                  className="bg-primary-darkblue04 font-bold flex flex-row place-content-center hover:bg-primary-darkblue03"
                  size="large"
                  type="primary"
                >
                  <span>
                    <PlusIcon className="w-5" />
                  </span>
                  Add New Cars
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
                <CardCars key={car.id} item={car} onDelete={onDelete} />
              ))}
            </div>
          </div>
        </div>
        {dialogDeleteVisible && (
          <div className="dialog h-full w-full bg-neutral-05 bg-opacity-60 absolute flex justify-center items-center">
            <div className="bg-neutral-01 w-[24rem] py-6 px-8 h-[20rem] flex flex-col items-center justify-center gap-y-4 rounded-md">
              <img
                src="https://images2.imgbox.com/0d/8d/x1YCIrry_o.png"
                className="w-[9rem]"
                alt=""
              />
              <p className="text-[1rem] font-bold">Menghapus Data Mobil</p>
              <p className="text-[0.875rem] text-center">
                Setelah dihapus, data mobil tidak dapat dikembalikan. Yakin
                ingin menghapus?{" "}
              </p>
              <div className="action flex flex-row gap-x-4">
                <Button
                  type="primary"
                  className="bg-primary-darkblue04 text-neutral-01 hover:bg-primary-darkblue03"
                  onClick={handleDialogYes}
                >
                  Ya
                </Button>
                <Button
                  type="default"
                  className="border-primary-darkblue04 text-primary-darkblue04 hover:border-primary-darkblue03"
                  onClick={handleDialogTidak}
                >
                  Tidak
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CarsDashboard;
