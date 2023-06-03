import React from "react";
import tmdbApi, { category, tvType } from "../../api/tmdbApi";
import Button from "../Button/Button";
import Container from "../Container/Container";
import MovieList from "../MovieList/MovieList";

const TvSeriesRow = () => {
  const [items, setItems] = React.useState([]);
  const [filterByTv, setFilterByTv] = React.useState(`${tvType.popular}`);
  React.useEffect(() => {
    try {
      const getMovies = async () => {
        const params = {
          page: 1,
        };
        const response = await tmdbApi.getTvList(filterByTv, {
          params,
        });
        setItems(response.results);
      };
      getMovies();
    } catch (error) {
      console.log(error);
    }
  }, [filterByTv]);
  return (
    <section className="py-10 bg-SECONDARY-BG">
      <Container>
        <div className="flex flex-col gap-6">
          <h1 className="text-3xl font-bold text-TYPOGRAPHY">On TV</h1>
          <div className="flex flex-row space-x-10">
            <Button
              onClick={() => setFilterByTv(tvType.popular)}
              className={`text-lg font-semibold hover:text-GOLD-TEXT transition-colors duration-150 ease-linear capitalize ${
                filterByTv === tvType.popular
                  ? "text-GOLD-TEXT"
                  : "text-TYPOGRAPHY"
              }`}
            >
              #Popular
            </Button>
            <Button
              onClick={() => setFilterByTv(tvType.top_rated)}
              className={`text-lg  font-semibold hover:text-GOLD-TEXT transition-colors duration-150 ease-linear capitalize  ${
                filterByTv === tvType.top_rated
                  ? "text-GOLD-TEXT"
                  : "text-TYPOGRAPHY"
              }`}
            >
              #Top Rated
            </Button>
            <Button
              onClick={() => setFilterByTv(tvType.on_the_air)}
              className={`text-lg  font-semibold hover:text-GOLD-TEXT transition-colors duration-150 ease-linear capitalize  ${
                filterByTv === tvType.on_the_air
                  ? "text-GOLD-TEXT"
                  : "text-TYPOGRAPHY"
              }`}
            >
              #On The Air
            </Button>
          </div>
        </div>
        <MovieList items={items} category={category.tv} />
      </Container>
    </section>
  );
};

export default TvSeriesRow;
