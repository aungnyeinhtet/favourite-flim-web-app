import React from "react";
import { useParams } from "react-router-dom";
import FrontLayout from "../../common/FrontLayout/FrontLayout";
import Container from "../../components/Container/Container";
import tmdbApi from "../../api/tmdbApi";
import apiConfig from "../../api/apiConfig";
import s from "./movie-detail.module.css";
import SimilarMovies from "../../components/SimilarMovies";
import DetailContent from "./DetailContent";
import CastList from "./CastList";
import VideoList from "./VideoList";

const MovieDetail = () => {
  const { category, id } = useParams();
  const [item, setItem] = React.useState(null);
  const [castList, setCastList] = React.useState([]);
  const [videoSrc, setVideoSrc] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    try {
      const getMovieDetail = async () => {
        setLoading(true);
        const params = {};
        const response = await tmdbApi.detail(category, id, { params });
        setItem(response);
        setLoading(false);
        window.scrollTo(0, 0);
      };
      getMovieDetail();
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [category, id]);

  React.useEffect(() => {
    try {
      const getCast = async () => {
        const response = await tmdbApi.credits(category, id);
        setCastList(response.cast);
      };
      getCast();
    } catch (error) {}
  }, [category, id]);
  React.useEffect(() => {
    try {
      const getVideos = async () => {
        setLoading(true);
        const response = await tmdbApi.getVideos(category, id);
        setVideoSrc(response.results);
        setLoading(false);
      };
      getVideos();
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [id, category]);

  return (
    <>
      <FrontLayout>
        {item && !loading && (
          <section className="bg-PRIMARY-BG">
            <div
              style={{
                backgroundImage: `url(${apiConfig.originalImage(
                  item.backdrop_path ? item.backdrop_path : item.poster_path
                )})`,
              }}
              className={s.background}
            />
            <Container>
              <div className=" py-6 flex lg:flex-row justify-start items-start flex-col gap-6 max-w-full">
                <div className="flex-1 z-20 lg:flex hidden">
                  <div
                    style={{
                      backgroundImage: `url(${apiConfig.w500Image(
                        item.poster_path ? item.poster_path : item.backdrop_path
                      )})`,
                    }}
                    className="bg-cover bg-center bg-no-repeat pt-[165%] rounded-xl  w-full"
                  />
                </div>
                <div className="lg:w-[70%] w-full z-20">
                  <DetailContent item={item} category={category} />

                  {castList && castList.length > 0 && (
                    <CastList items={castList} id={id} category={category} />
                  )}
                </div>
              </div>

              <VideoList items={videoSrc} category={category} id={id} />
            </Container>

            <SimilarMovies category={category} id={id} />
          </section>
        )}
      </FrontLayout>
    </>
  );
};

export default MovieDetail;
