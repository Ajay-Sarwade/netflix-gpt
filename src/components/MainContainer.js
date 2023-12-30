import React from "react";
import TrailerComponent from "./TrailerComponent";
import TitleComponent from "./TitleComponent";
import { useSelector } from "react-redux";

function MainContainer() {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  const trailerVideoDetails = useSelector(
    (store) => store.movies?.trailerVideoDetails
  );
  if (!movies) return;

  const movie = trailerVideoDetails || movies?.[0];

  return (
    <div>
      <TrailerComponent movieId={movie?.id} />
      <TitleComponent title={movie?.title} overview={movie?.overview} />
    </div>
  );
}

export default MainContainer;
