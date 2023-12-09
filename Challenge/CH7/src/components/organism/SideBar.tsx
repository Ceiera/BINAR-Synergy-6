import { HomeIcon, WrenchIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <>
      <div className="flex flex-col">
        <div className="main-bar bg-primary-darkblue04 flex flex-col h-full">
          <div className="p-[1.25rem]">
            <div className="bg-primary-darkblue01 w-[2.125rem] h-[2.125rem]"></div>
          </div>
          <Link
            to="/dashboard"
            className="dashboard flex flex-col text-center py-[1.25rem] hover:bg-primary-darkblue03"
          >
            <div className="px-[1.44rem]">
              <HomeIcon className="text-white" />
            </div>
            <p className="text-white text-[0.75rem] font-bold">Dashboard</p>
          </Link>
          <Link
            to="/cars"
            className="cars flex flex-col text-center py-[1.25rem] hover:bg-primary-darkblue03"
          >
            <div className="px-[1.44rem]">
              <WrenchIcon className="text-white" />
            </div>
            <p className="text-white text-[0.75rem] font-bold">Cars</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default SideBar;
