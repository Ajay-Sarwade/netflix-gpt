import React, { useRef } from "react";
import { openai } from "../utils/openai";
import { options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addGptMovieNames, addGptMovies } from "../utils/gptSlice";

const GptSearch = () => {
  const inputText = useRef(null);
  const dispatch = useDispatch();

  const searchMovies = async (movieName) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movieName +
        "&include_adult=false&language=en-US",
      options
    );
    const json = await data.json();

    return json.results;
  };

  const handleGptSearchClick = async () => {
    let gptquery =
      "Act as a movie recommendation syatem and suggest some movies for the query :" +
      inputText.current.value +
      "only give me names of 5 movies , comma separated like the example given ahead. Example Result: golmaal, hera pheri, andaz apna apna , dhol , dhamaal";

    const gptResult = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptquery }],
      model: "gpt-3.5-turbo",
    });

    const moviesNames = gptResult.choices[0].message.content.split(",");
    const moviesList = moviesNames.map((movie) => searchMovies(movie));
    const movies = await Promise.all(moviesList);
    dispatch(addGptMovieNames(moviesNames));
    dispatch(addGptMovies(movies));
  };

  return (
    <div className="flex justify-center">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-1/2 bg-black absolute z-20 mt-[10%] flex grid grid-cols-12 p-2"
      >
        <input
          ref={inputText}
          className="p-2 m-2 col-span-9 rounded-sm"
          placeholder="What kind of movies do u want to watch today?"
        ></input>
        <button
          onClick={handleGptSearchClick}
          className="p-2 m-2 bg-red-500 col-span-3 rounded-sm font-semibold text-white"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearch;
