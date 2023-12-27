import { createSlice } from "@reduxjs/toolkit";

export const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    isGptPage: false,
    gptMovieNames: null,
    gptMoviesList: null,
  },
  reducers: {
    showGptPage: (state) => {
      state.isGptPage = !state.isGptPage;
    },
    addGptMovies: (state, action) => {
      state.gptMoviesList = action.payload;
    },
    addGptMovieNames: (state, action) => {
      state.gptMovieNames = action.payload;
    },
  },
});

export const { showGptPage, addGptMovies, addGptMovieNames } = gptSlice.actions;

export default gptSlice.reducer;
