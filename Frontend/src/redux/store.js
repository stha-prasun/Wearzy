import { configureStore } from "@reduxjs/toolkit";
import bestSellersReducer from "./bestSeller.js";
import ProductsReducer from "./Products.js";
import ProductReducer from "./productDetails.js";
import userReducer from "./user.js";
import orderReducer from "./orders.js";

const store = configureStore({
  reducer: {
    User: userReducer,
    bestSellers: bestSellersReducer,
    Products: ProductsReducer,
    Product: ProductReducer,
    Orders: orderReducer
  },
});

export default store;
