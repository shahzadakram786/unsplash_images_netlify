import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../redux/cart/cartSlice";

const Store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default Store;
