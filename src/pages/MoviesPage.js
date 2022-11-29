import React, { useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import FrontLayout from "../common/FrontLayout/FrontLayout";
import bg from "../assets/slider-bg2.jpg";
import Container from "../components/Container/Container";
import PageHeader from "../components/PageHeader/PageHeader";
import Input from "../components/Input/Input";
import { Bars3Icon } from "@heroicons/react/24/solid";
import Movies from "../components/Movies/Movies";
import { UserAuth } from "../context/AuthContext";
import Drawer from "../components/Drawer";
import GenresSidebar from "../components/GenresSidebar/GenresSidebar";
import { useWindowSize } from "react-use";
const GenreMenuSidebar = ({ category }) => {
  const { isOpenGenre, closeGenre } = UserAuth();
  const { width } = useWindowSize();

  React.useEffect(() => {
    const closeMenu = () => {
      if (width > 1024) {
        closeGenre();
      }
    };
    closeMenu();
    return () => {
      closeMenu();
    };
  }, [closeGenre, width]);
  return isOpenGenre ? (
    <Drawer onClose={closeGenre}>
      <GenresSidebar handleClose={closeGenre} category={category} />
    </Drawer>
  ) : null;
};
const MoviesPage = () => {
  const { category, keyword } = useParams();
  const { openGenre } = UserAuth();
  return (
    <>
      <FrontLayout>
        <section className="bg-SECONDARY-BG">
          <div
            className="bg-cover bg-no-repeat bg-center py-[9rem]"
            style={{ backgroundImage: `url(${bg})` }}
          >
            <PageHeader category={category} />

            <div className="flex flex-row items-center lg:w-3/5 w-4/5 mx-auto mt-10">
              <SearchBox keyword={keyword} category={category} />
              <div
                className="cursor-pointer flex-1 ml-10 lg:hidden flex"
                onClick={openGenre}
              >
                <Bars3Icon className="w-10 h-10 text-PRIMARY-TEXT" />
              </div>
            </div>
          </div>
          <Container>
            <Movies category={category} />
          </Container>
        </section>
      </FrontLayout>
      <GenreMenuSidebar category={category} />
    </>
  );
};
const SearchBox = (props) => {
  const [keyword, setKeyword] = React.useState(
    props.keyword ? props.keyword : ""
  );
  const navigate = useNavigate();

  const movieSearchHandler = useCallback(() => {
    if (keyword.trim().length > 0) {
      navigate(`/${props.category}/search/${keyword}`);
    }
  }, [keyword, props.category, navigate]);

  React.useEffect(() => {
    const enterKey = (e) => {
      e.preventDefault();
      if (e.keyCode === 13) {
        movieSearchHandler();
      }
    };
    window.addEventListener("keyup", enterKey);
    return () => {
      window.removeEventListener("keyup", enterKey);
    };
  }, [movieSearchHandler, keyword]);

  return (
    <Input
      onClick={movieSearchHandler}
      onChange={(e) => setKeyword(e.target.value)}
      value={keyword}
      type="text"
      placeholder="Search here..."
      className="outline-none bg-transparent w-full px-4 text-PRIMARY-TEXT "
    />
  );
};
export default MoviesPage;
