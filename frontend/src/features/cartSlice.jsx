import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getCartItems = createAsyncThunk(
  "cart/getCartItems",
  async (pid, quantity) => {
    try {
      let response = await fetch(`/api/products/${pid}`);
      let data = await response.json();
      console.log(data);
    } catch (err) {
      console.error(err.message);
    }
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addCartItem: (state, action) => {
      const currentItem = action.payload;
      const doesExists = state.cartItems.find(
        (item) => item.product === currentItem.product
      );

      if (!doesExists) {
        state.cartItems = [...state.cartItems, currentItem];
      }
    },
  },
  extraReducers: {
    [getCartItems.pending]: () => {
      console.log("pendng");
    },
    [getCartItems.fulfilled]: (state, action) => {
      state.cartItems = action.payload;
    },
    [getCartItems.rejected]: () => {
      console.log("rejected");
    },
  },
});

export default cartSlice.reducer;
