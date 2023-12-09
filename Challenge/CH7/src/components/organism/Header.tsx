import { Input, Button, Dropdown } from "antd";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import UserEntity from "../../models/entity/User";
import { useEffect, useState } from "react";
import { ChevronDownIcon, Bars3Icon } from "@heroicons/react/24/solid";
import HeaderProps from "../../models/props/HeaderProps";
import { useNavigate } from "react-router-dom";

const Header = ({ closeSideBar }: HeaderProps) => {
  const navigate = useNavigate()
  const [user, setUser] = useState<UserEntity>({
    id: 0,
    username: "admin",
    email: "admin",
    password: "admin",
    role: "admin",
  });

  const items = [
    {
      label: (
        <Button
          type="link"
          onClick={() => {
            localStorage.clear();
            navigate('/login')
          }}
        >
          Logout
        </Button>
      ),
      key: "0",
    },
  ];

  const handleCloseSideBar = () => {
    closeSideBar();
  };

  const getInfoUser = async () => {
    const response = await fetch(
      import.meta.env.VITE_BACKEND_URL + "api/current-user",
      {
        method: "GET",
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
        },
      }
    );
    const result = await response.json();
    setUser(result.data.current_user);
  };

  useEffect(() => {
    getInfoUser();
  }, []);
  return (
    <>
      <div className="header bg-neutral-01 flex flex-row justify-between items-center px-[1.5rem] h-[4.375rem] py-[1rem] shadow-sm">
        <div className="" onClick={handleCloseSideBar}>
          <Bars3Icon className="h-5 w-5" />
        </div>
        <div className="flex flex-row justify-end gap-x-2">
          <div className="search-group flex flex-row">
            <Input
              placeholder="Search"
              className="rounded-none"
              prefix={
                <MagnifyingGlassIcon
                  className="h-5 w-5 text-neutral-03"
                  aria-hidden="true"
                />
              }
            ></Input>
            <Button
              type="default"
              className="text-primary-darkblue04 h-full rounded-none font-bold border-primary-darkblue04"
            >
              Search
            </Button>
          </div>
          <div className="profile-group flex flex-row items-center gap-2">
            <div className="bg-primary-darkblue01 rounded-full w-[2.375rem] h-[2.375rem] text-center place-content-center flex items-center">
              <p className="font-bold">{user.username[0].toUpperCase()}</p>
            </div>
            <div className="">{user.username}</div>
            <Dropdown menu={{ items }} trigger={["click"]}>
              <ChevronDownIcon className="h-5 w-5" />
            </Dropdown>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
