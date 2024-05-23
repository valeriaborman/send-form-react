import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {},
    reducers: {
        addToCart: (state, action) => {
            state[action.payload] = true;
        },
        removeFromCart: (state, action) => {
            delete state[action.payload];
        },
        increment: (state, action) => {
            const key = action.payload;
            if (!state[key]) {
                state[key] = 1;
            } else {
                state[key]++;
            }
        },
        deleteItem: (state, action) => {
            delete state[action.payload];
        }
    }
});

export const { addToCart, removeFromCart, increment, deleteItem } = cartSlice.actions;
export const selectCart = (state) => state.cart;
export default cartSlice.reducer;
