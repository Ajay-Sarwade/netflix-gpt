import React from "react";
import { useSelector } from "react-redux";
import MoviesList from "./MoviesList";

const GptMoviesList = () => {
  const movieNames = useSelector((store) => store.gpt.gptMovieNames);
  const movieList = useSelector((store) => store.gpt.gptMoviesList);

  if (!movieNames) return;

  return (
    <div className="bg-black bg-opacity-70 mt-[40%] md:mt-[20%] p-4 m-4 text-white z-50 relative xb-4">
      {movieNames.map((movie, index) => (
        <MoviesList key={movie} title={movie} movies={movieList[index]} />
      ))}
    </div>
  );
};

export default GptMoviesList;
