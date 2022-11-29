import React from "react";
import { Link } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";

const Logo = ({ className }) => {
  const { closeSidebar } = UserAuth();
  return (
    <Link
      to={"/"}
      onClick={closeSidebar}
      className={`${className} font-bold text-4xl text-RED-TEXT`}
    >
      FAVFLIM
    </Link>
  );
};

export default Logo;
