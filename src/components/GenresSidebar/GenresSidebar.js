import React from "react";
import tmdbApi from "../../api/tmdbApi";
import Button from "../Button/Button";
import Stack from "../Stack/Stack";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";

const GenresSidebar = ({ category }) => {
  const [genres, setGenres] = React.useState([]);
  const navigate = useNavigate();
  const { closeGenre } = UserAuth();

  const searchByGenreHandler = (value) => {
    const link = "/" + category + "/search/" + value;
    navigate(link);
    closeGenre();
  };
  React.useEffect(() => {
    if (category) {
      try {
        const getGenreList = async () => {
          const response = await tmdbApi.getGenres(category);
          setGenres(response.genres);
        };
        getGenreList();
      } catch (error) {
        console.log(error);
      }
    }
  }, [category]);
  return (
    <aside className="w-full text-PRIMARY-TEXT h-full bg-PRIMARY-BG">
      <h3 className="p-4 text-center w-full text-2xl font-bold text-PRIMARY-TEXT">
        Filter By Genres
      </h3>
      <Stack direction="column">
        {genres &&
          genres.length > 0 &&
          genres.map((genre, index) => {
            const link =
              genre.name === "Action & Adventure"
                ? "Action"
                : genre.name === "Sci-Fi & Fantasy"
                ? "Science Fiction"
                : genre.name === "War & Politics"
                ? "War"
                : genre.name;
            return (
              <Button
                onClick={() => searchByGenreHandler(link)}
                className="flex hover:bg-HOVER-BG py-2 hover:text-GOLD-TEXT transition-all ease-linear duration-150 px-4 justify-start
                "
                key={index}
              >
                {genre.name}
              </Button>
            );
          })}
      </Stack>
    </aside>
  );
};

export default GenresSidebar;
