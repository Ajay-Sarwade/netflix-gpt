import React from "react";
import { useDispatch } from "react-redux";
import { IMG_PATH, options } from "../utils/constants";
import { addTrailerVideoDetails, addVideoKey } from "../utils/moviesSlice";

const MovieCard = (props) => {
  const dispatch = useDispatch();
  const { movie } = props;
  const { id, poster_path } = movie;

  if (!poster_path) return;

  const getMovieVideo = async () => {
    let data = await fetch(
      "https://api.themoviedb.org/3/movie/" + String(id) + "/videos",
      options
    );
    let json = await data.json();
    let videos =
      json?.results.filter((video) => video?.type === "Trailer") || videos[0];
    let video = videos?.length > 0 ? videos[0] : json?.results?.[0];

    if (video && video?.key) {
      dispatch(addVideoKey(video.key));
      dispatch(addTrailerVideoDetails(movie));
    }
  };

  return (
    <div
      onClick={getMovieVideo}
      className="w-36 md:w-44 opacity-90 p-2 hover:opacity-50"
    >
      <img src={IMG_PATH + poster_path} alt="movie poster" />
    </div>
  );
};

export default MovieCard;
