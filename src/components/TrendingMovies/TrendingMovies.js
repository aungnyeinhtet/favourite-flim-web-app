import React from "react";
import apiConfig from "../../api/apiConfig";
import tmdbApi, { category, movieType } from "../../api/tmdbApi";
import Container from "../Container/Container";

const TrendingMovies = () => {
  const [items, setItems] = React.useState([]);
  const [movieId, setMovieId] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [videoSrc, setVideoSrc] = React.useState("");
  React.useEffect(() => {
    if (items && items.length > 0) {
      setMovieId(items[0].id);
    }
  }, [items]);
  React.useEffect(() => {
    if (movieId) {
      try {
        const getVideos = async () => {
          setLoading(true);
          const response = await tmdbApi.getVideos(category.movie, movieId);
          setVideoSrc(
            "https://www.youtube.com/embed/" + response.results[0].key
          );
          setLoading(false);
        };
        getVideos();
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
  }, [movieId]);
  React.useEffect(() => {
    try {
      const getTrendingMovie = async () => {
        const params = { page: 1 };
        const response = await tmdbApi.getMoviesList(movieType.now_playing, {
          params,
        });
        setItems(response.results);
      };
      getTrendingMovie();
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <section className="py-10 bg-PRIMARY-BG h-full">
      <Container>
        <h1 className="text-3xl font-bold text-PRIMARY-TEXT capitalize mb-6">
          Now Playing
        </h1>
        <div className="flex lg:flex-row flex-col items-center gap-5">
          <div className="lg:w-[50%] w-full text-white flex flex-col justify-center items-center">
            <div className="bg-black rounded-xl w-full h-[500px] flex flex-col justify-center items-center">
              {!videoSrc && loading ? (
                <div
                  className="spinner-border animate-spin inline-block w-20 h-20 border-4 rounded-full text-red-500"
                  role="status"
                />
              ) : (
                <iframe
                  src={videoSrc}
                  width="100%"
                  height="500px"
                  title="trailer"
                  className="rounded-xl"
                />
              )}
            </div>
          </div>
          <div className="flex-1 text-white max-h-[500px] overflow-y-scroll hide-scrollbar">
            <div className="flex flex-col gap-2">
              {items &&
                items.length > 0 &&
                items.map((item) => {
                  return (
                    <div
                      onClick={() => setMovieId(item.id)}
                      key={item.id}
                      className={`px-4 flex flex-row rounded-lg py-2 hover:bg-HOVER-BG cursor-pointer space-x-4 ${item.id === movieId ? "bg-HOVER-BG" : ""
                        }`}
                    >
                      <img
                        src={apiConfig.w500Image(
                          item.poster_path
                            ? item.poster_path
                            : item.backdrop_path
                        )}
                        alt={item.name || item.title}
                        className="w-1/5 object-fill rounded-xl"
                      />
                      <div>
                        <h1 className="font-semibold text-xl">
                          {item.title || item.name || item.original_title}
                        </h1>
                        <p className="text-gray-200">
                          {item.overview.substring(0, 200)}
                          {"..."}
                        </p>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TrendingMovies;
