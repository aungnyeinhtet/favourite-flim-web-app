import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { Link } from "react-router-dom";

const VideoList = ({ items, category, id }) => {
  return (
    <>
      {items && items.length > 0 && (
        <div className="video_grid">
          <div className="flex flex-row justify-between items-center mb-4 ">
            <h1 className="font-bold text-PRIMARY-TEXT text-4xl">Videos</h1>
            {items.length > 10 && (
              <Link to={`/view-all-video/${category}/${id}`}>
                <div className="text-lg font-semibold text-PRIMARY-TEXT py-2 px-6 rounded-full border-2 border-PRIMARY-TEXT">
                  View More
                </div>
              </Link>
            )}
          </div>
          <div>
            <Swiper
              slidesPerView={"auto"}
              spaceBetween={10}
              navigation={{ clickable: true }}
              modules={[Navigation]}
            >
              {items.slice(0, 10).map((item, i) => (
                <SwiperSlide key={i}>
                  <div className="w-full cursor-pointer">
                    <iframe
                      className="rounded-xl w-full"
                      height={"400px"}
                      src={`https://www.youtube.com/embed/${item.key}`}
                      title="trailer"
                    />
                    <h1 className="font-semibold text-lg text-PRIMARY-TEXT mt-2 p-2">
                      {item.name}
                    </h1>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}
    </>
  );
};

export default VideoList;
