import React from "react";
import MovieCard from "./MovieCard";

const MoviesList = ({ movies, title }) => {
  if (!movies) return;

  return (
    <div>
      <h1 className="font-semibold text-xl  text-white mx-2 ">{title}</h1>
      <div className="flex overflow-x-auto no-scrollbar ">
        <div className="flex pr-2 ">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoviesList;
