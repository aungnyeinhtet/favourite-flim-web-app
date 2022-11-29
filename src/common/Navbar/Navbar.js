import { Bars3Icon } from "@heroicons/react/24/solid";
import React from "react";
import Button from "../../components/Button/Button";
import Container from "../../components/Container/Container";
import Logo from "../../components/Logo/Logo";
import NavMenu from "../../components/NavMenu/NavMenu";
import { UserAuth } from "../../context/AuthContext";

const Navbar = ({ transparent }) => {
  const headerRef = React.useRef(null);
  const { openSidebar } = UserAuth();
  React.useEffect(() => {
    const shrinkHeader = () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("shrink");
      } else {
        headerRef.current.classList.remove("shrink");
      }
    };
    window.addEventListener("scroll", shrinkHeader);

    return () => {
      window.removeEventListener("scroll", shrinkHeader);
    };
  }, []);
  return (
    <header
      ref={headerRef}
      className={`fixed top-0  w-full  left-0 text-white py-10 z-50 ${
        transparent ? "" : "bg-SECONDARY-BG"
      }`}
    >
      <Container>
        <div className="items-center flex  flex-row">
          <div className="flex flex-row items-center justify-between w-full">
            <Logo className="mr-14" />
            <div className="lg:flex hidden">
              <NavMenu />
            </div>
            <Button className="lg:hidden flex" onClick={openSidebar}>
              <Bars3Icon className="w-8 h-8" />
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
