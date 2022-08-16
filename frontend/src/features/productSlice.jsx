import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchAllProducts = createAsyncThunk(
  "product/fetchAllProducts",
  async () => {
    let response = await fetch("/api/products");
    let data = await response.json();
    return data;
  }
);

const productSlice = createSlice({
  name: "product",
  initialState: {
    productItems: [],
    isLoading: false,
  },
  extraReducers: {
    [fetchAllProducts.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchAllProducts.fulfilled]: (state, action) => {
      state.productItems = action.payload;
      state.isLoading = false;
    },
    [fetchAllProducts.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export default productSlice.reducer;
