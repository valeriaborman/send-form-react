import React from "react";
import { useSelector, useDispatch } from "react-redux"; 
import { selectCart, deleteItem} from "../store/CartSlice"; 
import { selectGoods } from "../store/goodsSlice";
import Cart from "../components/Cart";

const CartList = () => {
    const dispatch = useDispatch();
    const goods = useSelector(selectGoods);
    const cart = useSelector(selectCart);


    const goodsObj = goods.reduce((accum, item) => {
        accum[item['articul']] = item;
        return accum;
    }, {});

    const removeFromCart = (articul) => {
        dispatch(deleteItem(articul));
    };

    const clickHandler = (event) => {
        if (event.target.classList.contains('delete')) {
            const articul = event.target.getAttribute('data-key');
            removeFromCart(articul);
        }
    };

    return (
        <div onClick={clickHandler}>
           <Cart cart={cart} goods={goodsObj}/>
        </div>
    );
}

export default CartList;