import { createSlice } from "@reduxjs/toolkit";

export const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    videoKey: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addVideoKey: (state, action) => {
      state.videoKey = action.payload;
    },
  },
});

export const { addNowPlayingMovies, addVideoKey } = moviesSlice.actions;

export default moviesSlice.reducer;
