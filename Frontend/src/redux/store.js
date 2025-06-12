import { configureStore } from "@reduxjs/toolkit";
import bestSellersReducer from "./bestSeller.js";
import ProductsReducer from "./Products.js";
import ProductReducer from "./productDetails.js";

const store = configureStore({
  reducer: {
    bestSellers: bestSellersReducer,
    Products: ProductsReducer,
    Product: ProductReducer
  },
});

export default store;
