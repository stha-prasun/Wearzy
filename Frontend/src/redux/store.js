import { configureStore } from "@reduxjs/toolkit";
import bestSellersReducer from "./bestSeller.js";
import ProductsReducer from "./Products.js";

const store = configureStore({
  reducer: {
    bestSellers: bestSellersReducer,
    Products: ProductsReducer
  },
});

export default store;
