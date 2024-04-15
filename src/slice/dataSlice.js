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
     
     state.user[0].user.unshift(action.payload)


    },
    setremove:(state,action)=>{
      state.user[0].user=action.payload
      
      },setdata:(state,action)=>{
        state.data=action.payload
        
        
        }
    
  },
});

// createSlice - > actions , reducer

export const { setcolor, setuser,setremove,setdata } =
  dataSlice.actions;

export default dataSlice.reducer;