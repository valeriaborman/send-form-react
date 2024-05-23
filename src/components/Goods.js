import React from 'react';

function Goods(props) {
    const handleCheckboxChange = (event) => {
        const isChecked = event.target.checked;
        const articul = event.target.getAttribute('data-key');
        props.onToggleCartItem(articul, isChecked);
    };

    return (
        <div className="goods-block">
            <p>{props.title}</p>
            <input 
                type="checkbox" 
                className="add-to-cart" 
                data-key={props.articul} 
                onChange={handleCheckboxChange}
                checked={props.inCart}
            />
        </div>
    );
}

export default Goods;
