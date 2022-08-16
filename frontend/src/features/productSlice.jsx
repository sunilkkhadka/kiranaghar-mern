import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchAllProducts = createAsyncThunk(
  "product/fetchAllProducts",
  async () => {
    let response = await fetch("/api/products");
    let data = await response.json();
    console.log(data);
    return data;
  }
);

const productSlice = createSlice({
  name: "product",
  initialState: {
    productItems: [],
    isLoading: false,
    extraReducers: {
      [fetchAllProducts.fulfilled]: (state, action) => {
        state.productItems = action.payload;
        state.isLoading = false;
      },
      [fetchAllProducts.pending]: (state) => {
        state.isLoading = true;
      },
      [fetchAllProducts.rejected]: (state) => {
        state.isLoading = false;
      },
    },
  },
});

console.log(productSlice);

export default productSlice.reducer;
