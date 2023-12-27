import { options } from "../utils/constants";
import { useDispatch } from "react-redux";
import {
  addNowPlayingMovies,
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies,
} from "../utils/moviesSlice";
import { useEffect } from "react";

export const useGetMovies = () => {
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      options
    );
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
  };
  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?&page=1",
      options
    );
    const json = await data.json();
    dispatch(addPopularMovies(json.results));
  };
  const getTopRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      options
    );
    const json = await data.json();
    dispatch(addTopRatedMovies(json.results));
  };
  const getUpcomimgMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      options
    );
    const json = await data.json();
    dispatch(addUpcomingMovies(json.results));
  };

  useEffect(() => {
    getNowPlayingMovies();
    getPopularMovies();
    getTopRatedMovies();
    getUpcomimgMovies();
  }, []);
};
