import React from "react";
import tmdbApi, { category, movieType } from "../../api/tmdbApi";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import apiConfig from "../../api/apiConfig";
import s from "./HeroSection.module.css";
import { PlayIcon, StarIcon } from "@heroicons/react/24/solid";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";

import { UserAuth } from "../../context/AuthContext";
import Modal from "../Modal/Modal";

const HeroSection = () => {
  const [items, setItems] = React.useState([]);
  const [videoSrc, setVideoSrc] = React.useState("");
  const { isOpenModal, closeModal } = UserAuth();

  React.useEffect(() => {
    const getSliderMovies = async () => {
      const params = {
        page: 1,
      };
      try {
        const response = await tmdbApi.getMoviesList(movieType.popular, {
          params,
        });
        setItems(response.results.slice(0, 3));
      } catch (error) {
        console.log(error);
      }
    };
    getSliderMovies();
  }, []);

  return (
    <div className="hero_section">
      <Swiper
        modules={[EffectFade, Autoplay]}
        effect={"fade"}
        speed={800}
        slidesPerView={1}
        loop
        autoplay={{ delay: 3000 }}
        className={s.swiper}
      >
        {items.map((item, i) => (
          <SwiperSlide key={i} className={s.hidden_btn}>
            {({ isActive }) => (
              <HeroSlideItem
                item={item}
                className={`${isActive ? "active" : ""}`}
                setVideoSrc={setVideoSrc}
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
      {isOpenModal && <Modal onClose={closeModal} videoSrc={videoSrc} />}
    </div>
  );
};
const HeroSlideItem = (props) => {
  const item = props.item;
  const navigate = useNavigate();
  const active = props.className;

  const { openModal } = UserAuth();
  const background = apiConfig.originalImage(
    item.backdrop_path ? item.backdrop_path : item.poster_path
  );
  const getVideosHandler = async () => {
    openModal();
    const videos = await tmdbApi.getVideos(category.movie, item.id);
    if (videos.results.length > 0) {
      props.setVideoSrc(
        "https://www.youtube.com/embed/" + videos.results[0].key
      );
    }
  };

  return (
    <div
      className={s.hero_slider}
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="flex max-w-7xl mx-auto px-6 py-10 flex-row justify-center items-center">
        <div className="lg:w-[55%] w-full pr-6 z-20">
          <h1
            className={`font-bold text-5xl text-white my-6  transition-all duration-[0.3s] ${
              active
                ? "opacity-1 translate-y-0"
                : "opacity-0 translate-y-[-100px]"
            }`}
          >
            {item.title || item.name}
          </h1>
          <p
            className={`text-gray-200 text-md  transition-all duration-[0.6s] ${
              active
                ? "opacity-1 translate-y-0"
                : "opacity-0 translate-y-[-100px]"
            }`}
          >
            {item.overview}
          </p>

          <div
            className={`flex flex-row items-center text-gray-200 space-x-3  transition-all duration-[1s]  ${
              active
                ? "opacity-1 translate-y-0"
                : "opacity-0 translate-y-[-100px]"
            }`}
          >
            <div className="flex items-center flex-row space-x-2">
              <StarIcon className="w-6 h-6 text-GOLD-TEXT" />
              <p>
                {item.vote_average}/ {item.vote_count}
              </p>
            </div>
            <div className="flex flex-row items-center my-6 ">
              Release Date: {item.release_date}{" "}
            </div>
          </div>
          <div
            className={`flex flex-row space-x-6  transition-all  duration-[0.9s] ${
              active
                ? "opacity-1 translate-y-0"
                : "opacity-0 translate-y-[-100px]"
            }`}
          >
            <Button
              onClick={getVideosHandler}
              className="text-white flex flex-row items-center py-3 px-6 border-2 border-white hover:border-RED-TEXT text-sm font-semibold rounded-full uppercase hover:bg-RED-TEXT duration-150 ease-linear transition-all group"
            >
              <PlayIcon className="w-6 h-6 text-RED-TEXT mr-2 group-hover:text-white transition-all ease-linear duration-150" />
              Watch Trailer
            </Button>
            <Button
              onClick={() => navigate(`/${category.movie}/${item.id}`)}
              className="py-3 px-6 text-white bg-RED-TEXT rounded-full font-semibold hover:bg-transparent transition-all ease-linear duration-150 border-2 border-RED-TEXT"
            >
              MORE DETAIL
            </Button>
          </div>
        </div>
        <div className="lg:flex flex-1 justify-start items-center z-20 hidden">
          <img
            src={apiConfig.w500Image(item.poster_path)}
            alt=""
            className={`w-4/6 transition-all duration-1000 ease-in-out rounded-xl ${
              active ? "opacity-1 scale-1" : "opacity-0 scale-0"
            }`}
          />
        </div>
      </div>
    </div>
  );
};
export default HeroSection;
