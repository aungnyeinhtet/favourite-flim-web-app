import React from "react";
import NavMenuList from "../NavMenuList/NavMenuList";
import Stack from "../Stack/Stack";
const paths = [
  {
    id: 1,
    url: "/movie",
    title: "Movies",
  },
  {
    id: 2,
    url: "/tv",
    title: "TV Series",
  },
  {
    id: 3,
    url: "/people",
    title: "Popular People",
  },
];
const NavMenu = ({ direction }) => {
  return (
    <Stack direction={direction}>
      {paths.map((path) => (
        <NavMenuList key={path.id} url={path.url} name={path.title} />
      ))}
    </Stack>
  );
};

export default NavMenu;
