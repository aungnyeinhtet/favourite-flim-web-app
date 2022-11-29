import React from "react";
import Drawer from "../../components/Drawer";
import Sidebar from "../../components/Sidebar/Sidebar";
import { UserAuth } from "../../context/AuthContext";
import Footer from "../Footer";
import Navbar from "../Navbar/Navbar";
import { useWindowSize } from "react-use";

const SidebarUi = () => {
  const { isOpenSidebar, closeSidebar } = UserAuth();
  const { width } = useWindowSize();

  React.useEffect(() => {
    const closeMenu = () => {
      if (width > 1024) {
        closeSidebar();
      }
    };
    closeMenu();
    return () => {
      closeMenu();
    };
  }, [closeSidebar, width]);
  return isOpenSidebar ? (
    <Drawer onClose={closeSidebar}>
      <Sidebar handleClose={closeSidebar} />
    </Drawer>
  ) : null;
};

const FrontLayout = ({ children, transparent = true }) => {
  return (
    <>
      <div className="bg-SECONDARY-BG h-screen w-full relative">
        <Navbar transparent={transparent} />
        <main className="relative bg-SECONDARY-BG">{children}</main>
        <Footer />
        <SidebarUi />
      </div>
    </>
  );
};

export default FrontLayout;
