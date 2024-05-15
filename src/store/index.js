import {configureStore} from '@reduxjs/toolkit';
import goodsReducer from './goodsSlice';
import CartReducer from './CartSlice'

export default configureStore({
reducer: {
goods: goodsReducer,
cart: CartReducer

}
})