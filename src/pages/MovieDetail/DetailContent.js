import { StarIcon } from "@heroicons/react/24/solid";
import React from "react";

const DetailContent = ({ item, category }) => {
  return (
    <div className="w-full">
      <h1 className="lg:text-5xl text-4xl font-bold text-TYPOGRAPHY mb-4">
        {item.title || item.name}
      </h1>
      {item.tagline && item.tagline.length > 0 && (
        <h3 className="text-PARAGRAPH font-normal  text-2xl mb-4">
          {item.tagline}
        </h3>
      )}
      <div className="flex flex-col">
        <h1 className="lg:text-2xl text-lg font-bold text-TYPOGRAPHY">
          Overview:
        </h1>
        <p className="text-PARAGRAPH lg:text-md text-sm">{item.overview}</p>
      </div>
      <div className="flex flex-row flex-wrap gap-4 my-6">
        {item.genres &&
          item.genres.map((genre) => (
            <div
              key={genre.id}
              className="bg-RED-TEXT font-bold text-TYPOGRAPHY px-2 rounded-md text-sm"
            >
              {genre.name}
            </div>
          ))}
      </div>
      <div className="flex flex-row items-center space-x-6">
        <div className="flex flex-row items-center space-x-2">
          <StarIcon className="w-6 h-6 text-GOLD-TEXT" />
          <p className="text-TYPOGRAPHY font-semibold text-sm">
            {item.vote_average}
          </p>
          <p className="text-white mx-1">/</p>
          <div className="text-TYPOGRAPHY font-semibold text-sm">
            {item.vote_count}
          </div>
        </div>
        <div className="text-PARAGRAPH font-semibold text-sm ">
          Release Date: {item.release_date || item.last_air_date}
        </div>
        {item.runtime && (
          <div className="flex flex-row items-center space-x-2">
            <h1 className="text-PARAGRAPH font-semibold text-sm ">Runtime:</h1>
            <span className="text-PARAGRAPH font-semibold text-sm ">
              {item.runtime}
            </span>
          </div>
        )}
      </div>
      {item.created_by && item.created_by.length > 0 && (
        <div className="flex my-4 flex-row items-center space-x-4">
          <h1 className="text-xl font-bold text-TYPOGRAPHY">Creator:</h1>
          <div className="flex space-x-2">
            <span className="text-YELLOW-TEXT" key={item.created_by[0].id}>
              {item.created_by[0].name}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailContent;
