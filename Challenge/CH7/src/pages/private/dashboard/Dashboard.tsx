// @ts-nocheck
import { useState, useEffect } from "react";
import CarEntity from "../../../models/entity/Car";
import SideBar from "../../../components/organism/SideBar";
import SideBarDetail from "../../../components/organism/SideBarDetail";
import SideBarDetailEntity from "../../../models/entity/SideBarDetail";
import Header from "../../../components/organism/Header";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { PaginationProps, Table } from "antd";
import { FilterValue, SortOrder } from "antd/es/table/interface";

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

const Dashboard = () => {
  const [listCars, setListCars] = useState([]);
  const [renderCars, setRenderCars] = useState([]);
  const [sideBarDetailVisible, setSideBarDetailVisible] = useState(false);
  const page: Page = {
    breadcrumb: {
      isChilderen: false,
      nameChildren: "",
    },
    h3: "Dashboard",
    button: {
      visible: true,
    },
  };

  const sideBarDetail: SideBarDetailEntity = {
    name: "Dashboard",
    element: [
      {
        nameElement: "Dashboard",
        link: "/Dashboard",
      },
    ],
  };

  const colums = [
    {
      title: "No",
      dataIndex: "key",
      defaultSortOrder: "descend",
      sorter: (a: CarEntity, b: CarEntity) => a.key - b.key,
    },
    {
      title: "Car Name",
      dataIndex: "name",
      defaultSortOrder: "descend",
      sorter: (a: CarEntity, b: CarEntity) => a.name - b.name,
    },
    {
      title: "Car Name",
      dataIndex: "cost_per_day",
      defaultSortOrder: "descend",
      sorter: (a: CarEntity, b: CarEntity) => a.cost_per_day - b.cost_per_day,
    },
    {
      title: "Size",
      dataIndex: "size",
      defaultSortOrder: "descend",
      sorter: (a: CarEntity, b: CarEntity) => a.size - b.size,
    },
    {
      title: "Created At",
      dataIndex: "created_at",
      defaultSortOrder: "descend",
      sorter: (a: CarEntity, b: CarEntity) => a.created_at - b.created_at,
    },
    {
      title: "Updated At",
      dataIndex: "updated_at",
      defaultSortOrder: "descend",
      sorter: (a: CarEntity, b: CarEntity) => a.updated_at - b.updated_at,
    },
  ];

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
    console.log(listCars);
    setListCars(listOfCars);
    const car = await listOfCars.map((car: CarEntity, index: number) => {
      return {
        ...car,
        key: index,
      };
    });
    setRenderCars(car);
  };

  const handleCloseSideBar = () => {
    setSideBarDetailVisible(!sideBarDetailVisible);
  };

  useEffect(() => {
    getListCars();
  }, []);
  const onChange = (
    pagination: PaginationProps,
    filters: FilterValue,
    sorter: SortOrder,
    extra: unknown
  ) => {
    console.log("params", pagination, filters, sorter, extra);
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
            </div>
            <p className="font-bold text-[0.875rem]">List Car</p>
            <Table
              columns={colums}
              dataSource={renderCars}
              onChange={onChange}
            ></Table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
