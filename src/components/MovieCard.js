import React from "react";
import { IMG_PATH } from "../utils/constants";

const MovieCard = ({ img }) => {
  if (!img) return;
  return (
    <div className="w-36 md:w-44 opacity-90 p-2 ">
      <img src={IMG_PATH + img} alt="movie poster" />
    </div>
  );
};

export default MovieCard;
