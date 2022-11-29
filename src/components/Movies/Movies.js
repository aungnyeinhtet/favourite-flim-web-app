import React from "react";
import { useParams } from "react-router-dom";
import tmdbApi, {
  category as categoryType,
  movieType,
  tvType,
} from "../../api/tmdbApi";
import Button from "../Button/Button";
import GenresSidebar from "../GenresSidebar/GenresSidebar";
import Grid from "../Grid/Grid";
import MovieCard from "../MovieCard/MovieCard";

const Movies = ({ category }) => {
  const [items, setItems] = React.useState([]);
  const [totalPages, setTotalPages] = React.useState(0);
  const [page, setPage] = React.useState(1);
  const { keyword } = useParams();

  React.useEffect(() => {
    try {
      const getItemsList = async () => {
        let response = null;

        if (keyword === undefined) {
          const params = {};
          switch (category) {
            case categoryType.movie:
              response = await tmdbApi.getMoviesList(movieType.upcoming, {
                params,
              });
              break;

            default:
              response = await tmdbApi.getTvList(tvType.popular, { params });
          }
        } else {
          const params = {
            query: keyword,
          };
          response = await tmdbApi.search(category, { params });
        }

        setItems(response.results);
        setTotalPages(response.total_pages);
      };
      getItemsList();
    } catch (error) {
      console.log(error);
    }
  }, [category, keyword]);

  const loadMoreHandler = async () => {
    try {
      let response = null;
      if (keyword === undefined) {
        const params = {
          page: page + 1,
        };
        switch (category) {
          case categoryType.movie:
            response = await tmdbApi.getMoviesList(movieType.upcoming, {
              params,
            });
            break;

          default:
            response = await tmdbApi.getTvList(movieType.popular, { params });
        }
      } else {
        const params = {
          page: page + 1,
          query: keyword,
        };
        response = await tmdbApi.search(category, { params });
      }
      setItems([...items, ...response.results]);
      setPage((prev) => prev + 1);
    } catch (error) {}
  };
  return (
    <div className="flex flex-row py-10 gap-6 relative min-h-screen">
      <div className="w-1/5 h-full flex-col bg-PRIMARY-BG lg:flex hidden">
        <GenresSidebar category={category} />
      </div>
      <div className="flex-1">
        <Grid>
          {items &&
            items.length > 0 &&
            items.map((item) => (
              <MovieCard key={item.id} item={item} category={category} />
            ))}
        </Grid>
        {page < totalPages && (
          <div className="flex flex-row items-center justify-center mt-10">
            <Button
              onClick={loadMoreHandler}
              className="bg-RED-TEXT font-semibold text-PRIMARY-TEXT py-3 px-6 rounded-full transition-all duration-150 ease-linear hover:bg-transparent hover:text-RED-TEXT border-2 border-RED-TEXT hover:scale-90"
            >
              LOAD MORE
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Movies;
