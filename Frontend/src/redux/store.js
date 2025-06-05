import { configureStore } from "@reduxjs/toolkit";
import bestSellersReducer from "./bestSeller.js";

const store = configureStore({
  reducer: {
    bestSellers: bestSellersReducer,
  },
});

export default store;
