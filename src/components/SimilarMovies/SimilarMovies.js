import React from "react";
import tmdbApi from "../../api/tmdbApi";
import Container from "../Container/Container";
import MovieList from "../MovieList/MovieList";

const SimilarMovies = ({ id, category }) => {
  const [items, setItems] = React.useState([]);
  React.useEffect(() => {
    try {
      const getSimilarMovies = async () => {
        const response = await tmdbApi.similar(category, id);
        setItems(response.results);
      };
      getSimilarMovies();
    } catch (error) {}
  }, [category, id]);
  return (
    <section className="py-10">
      <Container>
        <h1 className="lg:text-4xl text-3xl font-bold text-PRIMARY-TEXT">
          More like this
        </h1>
        <MovieList items={items} category={category} />
      </Container>
    </section>
  );
};

export default SimilarMovies;
