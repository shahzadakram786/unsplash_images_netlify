import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name: "cart",
    initialState: {
        cartCount: 0,
        images: [],
    },

    reducers: {
        addToCart: (state) => {
            state.cartCount += 1;
        },
        setImages: (state, action) => {
            state.images = action.payload;
        },
    },
});

export const { addToCart, setImages } = CartSlice.actions;

export default CartSlice.reducer;