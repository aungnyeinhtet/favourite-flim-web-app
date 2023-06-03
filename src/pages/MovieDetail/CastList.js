import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import apiConfig from "../../api/apiConfig";
import { Link } from "react-router-dom";

const CastList = ({ items, category, id }) => {
  return (
    <div className="cast_list mt-4 w-full">
      <div className="flex flex-row justify-between items-center mb-4 ">
        <h1 className="font-bold text-TYPOGRAPHY text-2xl">Top Cast</h1>
        {items.length > 10 && (
          <Link to={`/view-all-cast/${category}/${id}`}>
            <div className="text-lg font-semibold text-TYPOGRAPHY py-2 px-6 rounded-full border-2 border-TYPOGRAPHY">
              View More
            </div>
          </Link>
        )}
      </div>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={10}
        pagination={{ clickable: true }}
        modules={Pagination}
      >
        {items.slice(0, 10).map((item, i) => (
          <SwiperSlide key={i}>
            <>
              <div
                style={{
                  backgroundImage: `url(${apiConfig.w500Image(
                    item.profile_path ? item.profile_path : null
                  )})`,
                }}
                className="bg-cover bg-top bg-no-repeat cursor-pointer pt-[150%] relative rounded-2xl"
              ></div>
              <h3 className="text-gray-200 font-semibold text-lg mt-2">
                {item.name}
              </h3>
              <p className="text-sm text-gray-300 ">{item.character}</p>
            </>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CastList;
