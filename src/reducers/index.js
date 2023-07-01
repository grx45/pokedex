import { configureStore } from "@reduxjs/toolkit";
import favouriteReducer from "./favourite";

const globalStore = configureStore({
  reducer: {
    favouriteReducer,
  },
});

export default globalStore;
