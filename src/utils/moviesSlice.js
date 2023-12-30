import { createSlice } from "@reduxjs/toolkit";

export const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    popularMovies: null,
    topRatedMovies: null,
    upcomingMovies: null,
    videoKey: null,
    trailerVideoDetails: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    addVideoKey: (state, action) => {
      state.videoKey = action.payload;
    },
    addTrailerVideoDetails: (state, action) => {
      state.trailerVideoDetails = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addVideoKey,
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies,
  addTrailerVideoDetails,
} = moviesSlice.actions;

export default moviesSlice.reducer;
