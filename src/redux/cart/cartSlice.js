import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    cartCount: 0,
  },
  reducers: {
    addToCart: (state) => {
      state.cartCount += 1;
    },
  },
});

export const { addToCart } = CartSlice.actions;

export default CartSlice.reducer;
