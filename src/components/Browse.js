import React, { useEffect } from "react";
import Header from "./Header";
import { useGetMovies } from "../hooks/useGetNowPalyingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GptPage from "./GptPage";
import { useSelector } from "react-redux";

function Browse() {
  useGetMovies();
  const isGptPage = useSelector((store) => store.gpt.isGptPage);
  return (
    <div>
      <Header />
      {isGptPage ? (
        <GptPage />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
}

export default Browse;
