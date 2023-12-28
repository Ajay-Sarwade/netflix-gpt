export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY,
  },
};

export const IMG_PATH = "https://image.tmdb.org/t/p/w500";

export const OPEN_AI_KEY = process.env.REACT_APP_OPEN_AI_KEY;
