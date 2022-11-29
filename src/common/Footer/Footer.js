import React from "react";
import { Link } from "react-router-dom";
import footerBg from "../../assets/ft-bg.jpg";
import Container from "../../components/Container/Container";
import Logo from "../../components/Logo/Logo";

const Footer = () => {
  return (
    <div
      className="py-[2rem] relative bg-center bg-cover bg-no-repeat text-white"
      style={{ backgroundImage: `url(${footerBg})` }}
    >
      <Container>
        <div className="flex flex-col justify-center items-center mb-6">
          <Logo />
        </div>
        <div className="grid grid-cols-12 gap-4">
          <ul className="col-span-6 lg:col-span-4">
            <li className="font-semibold text-xl py-2">
              <Link
                to="#"
                className="hover:text-RED-TEXT duration-150 ease-linear transition-colors"
              >
                Home
              </Link>
            </li>
            <li className="font-semibold text-xl py-2">
              <Link
                to="#"
                className="hover:text-RED-TEXT duration-150 ease-linear transition-colors"
              >
                Contact Us
              </Link>
            </li>
            <li className="font-semibold text-xl py-2">
              <Link
                to="#"
                className="hover:text-RED-TEXT duration-150 ease-linear transition-colors"
              >
                Term of services
              </Link>
            </li>
            <li className="font-semibold text-xl py-2">
              <Link
                to="#"
                className="hover:text-RED-TEXT duration-150 ease-linear transition-colors"
              >
                About us
              </Link>
            </li>
          </ul>
          <ul className="col-span-6 lg:col-span-4">
            <li className="font-semibold text-xl py-2">
              <Link
                to="#"
                className="hover:text-RED-TEXT duration-150 ease-linear transition-colors"
              >
                Live
              </Link>
            </li>
            <li className="font-semibold text-xl py-2">
              <Link
                to="#"
                className="hover:text-RED-TEXT duration-150 ease-linear transition-colors"
              >
                FAQ
              </Link>
            </li>
            <li className="font-semibold text-xl py-2">
              <Link
                to="#"
                className="hover:text-RED-TEXT duration-150 ease-linear transition-colors"
              >
                Premium
              </Link>
            </li>
            <li className="font-semibold text-xl py-2">
              <Link
                to="#"
                className="hover:text-RED-TEXT duration-150 ease-linear transition-colors"
              >
                Pravacy policy
              </Link>
            </li>
          </ul>

          <ul className="col-span-6 lg:col-span-4">
            <li className="font-semibold text-xl py-2">
              <Link
                to="#"
                className="hover:text-RED-TEXT duration-150 ease-linear transition-colors"
              >
                You must watch
              </Link>
            </li>
            <li className="font-semibold text-xl py-2">
              <Link
                to="#"
                className="hover:text-RED-TEXT duration-150 ease-linear transition-colors"
              >
                Recent release
              </Link>
            </li>
            <li className="font-semibold text-xl py-2">
              <Link
                to="#"
                className="hover:text-RED-TEXT duration-150 ease-linear transition-colors"
              >
                Top IMDB
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
