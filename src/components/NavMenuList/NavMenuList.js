import React from "react";
import { Link, useLocation } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";

const NavMenuList = ({ name, url, small }) => {
  const { pathname } = useLocation();
  const { closeSidebar } = UserAuth();
  const active = pathname === url ? "text-RED-TEXT" : "text-TYPOGRAPHY";
  return (
    <Link to={url}>
      <div
        onClick={closeSidebar}
        className={`text-TYPOGRAPHY font-semibold text-lg hover:text-RED-TEXT transition-colors decoration-cyan-200 ease-linear ${active}`}
      >
        {name}
      </div>
    </Link>
  );
};

export default NavMenuList;
