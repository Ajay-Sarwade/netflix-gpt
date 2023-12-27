import React from "react";
import netflixBackground from "../images/netflix-background.png";
import GptSearch from "./GptSearch";
import GptMoviesList from "./GptMoviesList";

const GptPage = () => {
  return (
    <>
      <div className="fixed">
        <img
          className=" h-screen w-screen object-cover -z-10 relative"
          src={netflixBackground}
          alt="netflix-logo"
        />
      </div>
      <GptSearch />
      <GptMoviesList />
    </>
  );
};

export default GptPage;
