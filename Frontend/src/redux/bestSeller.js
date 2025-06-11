import { createSlice } from "@reduxjs/toolkit";

const bestSellerSlice = createSlice({
  name: "bestSeller",
  initialState: {
    bestSeller: [],
  },
  reducers: {
    setBestSeller: (state, action) => {
      state.bestSeller = action.payload;
    },
  },
});

export const { setBestSeller } = bestSellerSlice.actions;
export default bestSellerSlice.reducer;
