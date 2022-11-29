import React from "react";
import Logo from "../Logo";
import NavMenu from "../NavMenu/NavMenu";
import { XMarkIcon } from "@heroicons/react/24/solid";
import Button from "../Button/Button";

const Sidebar = ({ handleClose }) => {
  return (
    <div className=" bg-PRIMARY-BG w-full h-full">
      <div className="p-6 flex flex-col justify-between h-full">
        <div className="flex flex-col gap-6">
          <div className="w-full flex justify-between items-center">
            <Logo />
            <Button className="cursor-pointer " onClick={handleClose}>
              <XMarkIcon className="w-7 h-7 text-white hover:text-RED-TEXT duration-150 ease-linear transition-all" />
            </Button>
          </div>
          <NavMenu direction="column" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
