import React from "react";
import MoviesList from "./MoviesList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const nowPlayingMovies = useSelector(
    (store) => store.movies?.nowPlayingMovies
  );
  const popularMovies = useSelector((store) => store.movies?.popularMovies);
  const topRatedMovies = useSelector((store) => store.movies?.topRatedMovies);
  const upcomingMovies = useSelector((store) => store.movies?.upcomingMovies);
  return (
    <div className="bg-black">
      <div className="mt-[20%] md:-mt-32 relative z-50">
        <MoviesList movies={nowPlayingMovies} title={"Now Playing"} />
        <MoviesList movies={popularMovies} title={"Popular"} />
        <MoviesList movies={topRatedMovies} title={"Top Rated"} />
        <MoviesList movies={upcomingMovies} title={"Upcoming Movies"} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
