import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import MovieCard from "../MovieCard/MovieCard";

const MovieList = ({ items, category }) => {
  return (
    <>
      {items && items.length && <div className="filer_movies mt-6">
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={10}
          pagination={{ clickable: true }}
          modules={Pagination}
        >
          {items.map((item, i) => (
            <SwiperSlide key={i}>
              <MovieCard item={item} category={category} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>}</>

  );
};

export default MovieList;
