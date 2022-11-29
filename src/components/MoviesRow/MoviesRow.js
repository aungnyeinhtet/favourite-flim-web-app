import React from "react";
import tmdbApi, { category, movieType } from "../../api/tmdbApi";
import Button from "../Button/Button";
import Container from "../Container/Container";
import MovieList from "../MovieList/MovieList";

const MoviesRow = () => {
  const [items, setItems] = React.useState([]);
  const [filterByMovies, setFilterByMovies] = React.useState(
    `${movieType.upcoming}`
  );
  React.useEffect(() => {
    try {
      const getMovies = async () => {
        const params = {
          page: 1,
        };
        const response = await tmdbApi.getMoviesList(filterByMovies, {
          params,
        });
        setItems(response.results);
      };
      getMovies();
    } catch (error) {
      console.log(error);
    }
  }, [filterByMovies]);
  return (
    <section className="py-10 bg-SECONDARY-BG">
      <Container>
        <div className="flex flex-col gap-6">
          <h1 className="text-3xl font-bold text-PRIMARY-TEXT">Movies</h1>
          <div className="flex flex-row space-x-10">
            <Button
              onClick={() => setFilterByMovies(movieType.upcoming)}
              className={`text-lg font-semibold hover:text-GOLD-TEXT transition-colors duration-150 ease-linear capitalize ${
                filterByMovies === movieType.upcoming
                  ? "text-GOLD-TEXT"
                  : "text-PRIMARY-TEXT"
              }`}
            >
              #Upcomming
            </Button>
            <Button
              onClick={() => setFilterByMovies(movieType.popular)}
              className={`text-lg  font-semibold hover:text-GOLD-TEXT transition-colors duration-150 ease-linear capitalize  ${
                filterByMovies === movieType.popular
                  ? "text-GOLD-TEXT"
                  : "text-PRIMARY-TEXT"
              }`}
            >
              #Popular
            </Button>
            <Button
              onClick={() => setFilterByMovies(movieType.top_rated)}
              className={`text-lg  font-semibold hover:text-GOLD-TEXT transition-colors duration-150 ease-linear capitalize  ${
                filterByMovies === movieType.top_rated
                  ? "text-GOLD-TEXT"
                  : "text-PRIMARY-TEXT"
              }`}
            >
              #Top Rated
            </Button>
          </div>
        </div>
        <MovieList items={items} category={category.movie} />
      </Container>
    </section>
  );
};

export default MoviesRow;
