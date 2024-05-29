import React from 'react';
import './Cart';
import '../App';
import Contact from './contact'; 

const Cart = (props) => {
    let cart = props.cart;
    let goods = props.goods;
    let totalSum = 0;

    let cartData = Object.keys(cart).map(item => {
        const itemCost = goods[item]['cost'];
        totalSum += itemCost;

        return `Name of the service: ${goods[item]['title']}\nPrice: ${goods[item]['cost']}$\n`;
        
    }).join('\n');

    cartData += `\nTotal amount: ${totalSum}$`;

    return (
        <>
            <hr />
            {Object.keys(cart).map(item => {
                return (
                    <table key={goods[item]['articul']}>
                        <tbody>
                            <tr>
                                <td><b>Name of the service:</b> {goods[item]['title']}</td>
                            </tr>
                            <tr>
                            <td><b>Price:</b> {goods[item]['cost'] + "$"}</td>
                            </tr>
                        </tbody>
                    </table>
                );
            })}
            <div className='total-amount'>
                <td><b>Total amount:</b> {totalSum + "$"}</td>
            </div>
            <Contact cartData={cartData} /> 
        </>
    );
};

export default Cart;
