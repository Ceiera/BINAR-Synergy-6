import { Link } from "react-router-dom";
import SideBarDetailProps from "../../models/props/SideBarDetailProps";

const SideBarDetail = ({item}: SideBarDetailProps) => {
  return (
    <>
      <div className="flex flex-col w-[13.75rem] h-full">
        <div className="py-[1.12rem] px-[1.5rem]">
            <div className="bg-primary-darkblue01 w-[6.125rem] h-[2.125rem]"></div>
        </div>
        <div className="py-[1.5rem] flex flex-col gap-4">
            <div className="name text-[0.875rem] px-[1.5rem] font-bold text-neutral-03 ">{item.name}</div>
            <div className="flex flex-col ">
                {item.element.map((element, index) => {
                    return(
                        <Link key={index} to={element.link}  className="pr-[1.5rem] px-[1.5rem] text-neutral-05 py-[0.5rem] text-[0.875rem] font-bold hover:bg-primary-darkblue01">{element.nameElement}</Link>
                    )
                })}
            </div>
        </div>
      </div>
    </>
  );
};

export default SideBarDetail;
