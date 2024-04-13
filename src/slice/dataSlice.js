import { createSlice } from "@reduxjs/toolkit";
const dt=require("../data.json")
// combination of action and reducer (generate)

const initialState = {
  user: [dt],
  color:"",
  data:[]
  
};


const dataSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setcolor: (state, action) => {
     state.color=action.payload;
     console.log(state.color)
    },
    setuser: (state, action) => {
      
    },
    
  },
});

// createSlice - > actions , reducer

export const { setcolor, setuser } =
  dataSlice.actions;

export default dataSlice.reducer;