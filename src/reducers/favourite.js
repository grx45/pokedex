import { createSlice } from "@reduxjs/toolkit";

const favouriteSlice = createSlice({
  name: "favourite",

  initialState: {
    data: [],
  },

  reducers: {
    favouriteAction: (state, action) => {
      state.data = action.payload;
    },
    favouriteEmpty: (state, action) => {
      state.data = [];
    },
  },
});

// Export action function nya
export const { favouriteAction, favouriteEmpty } = favouriteSlice.actions; // fungsi di dalam property reducers

// Export reducersnya
export default favouriteSlice.reducer;
