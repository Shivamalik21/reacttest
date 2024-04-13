import { createSlice } from "@reduxjs/toolkit";
const dt=require("../data.json")
// combination of action and reducer (generate)

const initialState = {
  user: [dt],
  color:"",
  data:[]
  
};

localStorage.setItem("data",initialState.user[0].user)
const dataSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setcolor: (state, action) => {
     state.color=action.payload;
     console.log(state.color)
    },
    setuser: (state, action) => {
     
     state.user[0].user.unshift(action.payload)
console.log(action.payload)
console.log(state.data)
    },
    
  },
});

// createSlice - > actions , reducer

export const { setcolor, setuser } =
  dataSlice.actions;

export default dataSlice.reducer;