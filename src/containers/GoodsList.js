import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectGoods } from "../store/goodsSlice";
import Goods from "../components/Goods";
import { addToCart, removeFromCart } from "../store/CartSlice";

function GoodsList() {
    const goods = useSelector(selectGoods);
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const handleToggleCartItem = (articul, isChecked) => {
        if (isChecked) {
            dispatch(addToCart(articul));
        } else {
            dispatch(removeFromCart(articul));
        }
    };

    return (
        <div className="goods-field">
            {goods.map(item => (
                <Goods
                    key={item.articul}
                    title={item.title}
                    articul={item.articul}
                    inCart={!!cart[item.articul]}
                    onToggleCartItem={handleToggleCartItem}
                />
            ))}
        </div>
    );
}

export default GoodsList;
