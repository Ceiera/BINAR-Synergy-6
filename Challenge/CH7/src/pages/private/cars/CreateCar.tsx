import { useState } from "react";
import SideBar from "../../../components/organism/SideBar";
import SideBarDetail from "../../../components/organism/SideBarDetail";
import SideBarDetailEntity from "../../../models/entity/SideBarDetail";
import Header from "../../../components/organism/Header";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import FormCar from "../../../components/organism/FormCar";

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

const CreateCar = () => {
  const [sideBarDetailVisible, setSideBarDetailVisible] = useState(false);
  const page: Page = {
    breadcrumb: {
      isChilderen: true,
      nameChildren: "Add New Cars",
    },
    h3: "Add New Cars",
    button: {
      visible: false,
    },
  };

  const sideBarDetail: SideBarDetailEntity = {
    name: "Cars",
    element: [
      {
        nameElement: "List Cars",
        link: "/cars",
      },
    ],
  };

  const handleCloseSideBar = () => {
    setSideBarDetailVisible(!sideBarDetailVisible);
  };

  return (
    <>
      <div className="flex flex-row h-full min-h-[100vh] overflow-hidden">
        <div className="flex flex-row sticky">
          <SideBar />
          {sideBarDetailVisible && <SideBarDetail item={sideBarDetail} />}
        </div>
        <div className="content flex flex-col w-full">
          <Header closeSideBar={handleCloseSideBar} />
          <div className="main px-[1.5rem] flex flex-col pt-[2rem] bg-primary-darkblue01 gap-y-6 h-full overflow-y-auto">
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
            
            <FormCar method="POST"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateCar;
