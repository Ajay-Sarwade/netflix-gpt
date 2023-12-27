import React from "react";
import { IMG_PATH } from "../utils/constants";

const MovieCard = ({ img }) => {
  return (
    <div className="w-48 opacity-90 p-2 hover:opacity-100">
      <img src={IMG_PATH + img} alt="movie poster" />
    </div>
  );
};

export default MovieCard;
