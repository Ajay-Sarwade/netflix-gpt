import React from "react";
import TrailerComponent from "./TrailerComponent";
import TitleComponent from "./TitleComponent";
import { useSelector } from "react-redux";

function MainContainer() {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return;
  const movie = movies?.[1];

  return (
    <div>
      <TrailerComponent movieId={movie?.id} />
      <TitleComponent title={movie?.title} overview={movie?.overview} />
    </div>
  );
}

export default MainContainer;
