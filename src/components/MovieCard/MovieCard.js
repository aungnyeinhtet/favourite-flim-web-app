import React from "react";
import { Link } from "react-router-dom";
import apiConfig from "../../api/apiConfig";
import Button from "../Button/Button";
import s from "./MovieCard.module.css";
import { motion } from "framer-motion";
import { PlayIcon, StarIcon } from "@heroicons/react/24/solid";
import { category } from "../../api/tmdbApi";

const MovieCard = (props) => {
  const item = props.item;
  const poster = apiConfig.w500Image(
    item.poster_path ? item.poster_path : item.backdrop_path
  );
  const link = "/" + category[props.category] + "/" + item.id;

  return (
    <>
      {item && (
        <div>
          <Link to={link}>
            <motion.div
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              exit={{ scale: 1 }}
              transition={{ duration: 0.8 }}
              style={{ backgroundImage: `url(${poster})` }}
              className={`${s.movie_card}`}
            >
              <Button className={s.card_btn}>
                <PlayIcon className="w-8 h-8" />
              </Button>
            </motion.div>
          </Link>
          <div className="mt-2">
            <div className="flex flex-row items-center justify-between">
              <div className="flex flex-row items-center space-x-1">
                {item.vote_average === 0 ? (
                  <StarIcon className="w-6 h-6 text-gray-400" />
                ) : (
                  <StarIcon className="w-6 h-6 text-GOLD-TEXT" />
                )}

                <p className="text-white text-sm font-semibold">
                  {item.vote_average}
                </p>
              </div>
            </div>

            <h3 className="text-PRIMARY-TEXT font-semibold text-lg">
              {item.name || item.title || item.original_title}
            </h3>
          </div>
        </div>
      )}
    </>
  );
};

export default MovieCard;
