import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "../slice/dataSlice";

const store = configureStore({
  reducer: {
    dataSlice,
  },
});

export default store;