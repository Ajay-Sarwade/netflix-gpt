import React from "react";
import { IMG_PATH } from "../utils/constants";

const MovieCard = ({ img }) => {
  return (
    <div className="w-44 opacity-90 p-2 ">
      <img src={IMG_PATH + img} alt="movie poster" />
    </div>
  );
};

export default MovieCard;
