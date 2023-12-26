import React, { useEffect } from "react";
import Header from "./Header";
import { useGetNowPlayingMovies } from "../hooks/useGetNowPalyingMovies";
import MainContainer from "./MainContainer";

function Browse() {
  useGetNowPlayingMovies();
  return (
    <div>
      <Header />
      <MainContainer />
    </div>
  );
}

export default Browse;
