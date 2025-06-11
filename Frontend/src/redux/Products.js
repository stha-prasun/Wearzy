import { createSlice } from "@reduxjs/toolkit";

const ProductsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
  },
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const { setProducts } = ProductsSlice.actions;
export default ProductsSlice.reducer;
