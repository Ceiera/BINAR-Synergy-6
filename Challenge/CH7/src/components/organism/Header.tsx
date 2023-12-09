import { Input, Button } from "antd";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import UserEntity from "../../models/entity/User";
import { useEffect, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const Header = () => {
  const [user, setUser] = useState<UserEntity>({
    id: 0,
    username: "admin",
    email: "admin",
    password: "admin",
    role: "admin",
  });

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
      <div className="header bg-neutral-01 flex flex-row justify-end h-[4.375rem] py-[1rem] gap-x-2 shadow-sm">
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
          <ChevronDownIcon className="h-5 w-5" />
        </div>
      </div>
    </>
  );
};

export default Header;
