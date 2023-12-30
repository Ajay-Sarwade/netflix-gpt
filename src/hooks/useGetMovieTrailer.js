import { options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addVideoKey } from "../utils/moviesSlice";
import { useEffect } from "react";

export const useGetMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    getMovieVideo();
  }, []);

  const getMovieVideo = async () => {
    let data = await fetch(
      "https://api.themoviedb.org/3/movie/" + String(movieId) + "/videos",
      options
    );
    let json = await data.json();
    let videos =
      json?.results.filter((video) => video?.type === "Trailer") || videos[0];
    let video = videos?.length > 0 ? videos[0] : json?.results?.[0];

    if (video && video?.key) {
      dispatch(addVideoKey(video.key));
    }
  };
};
