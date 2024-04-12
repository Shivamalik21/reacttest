import { createSlice } from "@reduxjs/toolkit";
const dt=require("../data.json")
// combination of action and reducer (generate)

const initialState = {
  user: [dt],
  color:""
  
};


const dataSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setcolor: (state, action) => {
     state.color=action.payload;
     console.log(state.color)
    },
    setTopRated: (state, action) => {
      state.topRated=action.payload;
    },
    setSearchMovie: (state, action) => {
      state.searchMovie = action.payload;
    },
    setGenres: (state, action) => {
      state.genres = action.payload;
    },
    setSimilar: (state, action) => {
      state.similar = action.payload;
    },
  },
});

// createSlice - > actions , reducer

export const { setcolor, setTopRated, setSearchMovie, setGenres, setSimilar } =
  dataSlice.actions;

export default dataSlice.reducer;