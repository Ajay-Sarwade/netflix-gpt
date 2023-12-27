import React, { useEffect } from "react";
import Header from "./Header";
import {
  useGetNowPlayingMovies,
  useGetPopularMovies,
  useGetTopRatedMovies,
  useGetUpcomingMovies,
} from "../hooks/useGetNowPalyingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

function Browse() {
  useGetNowPlayingMovies();
  useGetPopularMovies();
  useGetTopRatedMovies();
  useGetUpcomingMovies();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
}

export default Browse;
