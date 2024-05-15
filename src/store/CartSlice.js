import {createSlice} from '@reduxjs/toolkit';

export const CartSlice = createSlice({
    name: 'cart',
    initialState: {
        value: {}
    },
    reducers:{
        increment : (state, data) =>{
            let articul = data.payload;
            if(state.value[articul] === undefined) state.value[articul] = 0;
            state.value[articul]++;
            console.log(state.value);
        },
        deleteItem: (state, action) =>{
            const i = action.payload;
            delete state.value[i]

        }
    }
})

export const { increment } = CartSlice.actions;

export const { deleteItem } = CartSlice.actions;


export const selectCart = state => state.cart.value;

export default CartSlice.reducer;

