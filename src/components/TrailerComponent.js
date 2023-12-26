import { useSelector } from "react-redux";
import { useGetMovieTrailer } from "../hooks/useGetMovieTrailer";

const TrailerComponent = ({ movieId }) => {
  const videoKey = useSelector((store) => store.movies?.videoKey);

  useGetMovieTrailer(movieId);

  return (
    <div className="absolute  aspect-video ">
      <iframe
        className="w-screen aspect-video "
        src={"https://www.youtube.com/embed/" + videoKey + "?autoplay=1&mute=1"}
        title="YouTube video player"
        style={{ border: "none" }}
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default TrailerComponent;
