import React, { useEffect } from "react";
import Header from "./Header";
import { useGetMovies } from "../hooks/useGetNowPalyingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

function Browse() {
  useGetMovies();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
}

export default Browse;
