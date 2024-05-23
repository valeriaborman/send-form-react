import React from 'react';
import './Cart';
import '../App';

const Cart = (props) => {
    let cart = props.cart;
    let goods = props.goods;
    let totalSum = 0;
    return (
        <>
        
         <hr></hr>
            {Object.keys(cart).map(item => {
               const itemCost = goods[item]['cost'];
               totalSum += itemCost;
               
                return (
                    
                    <table key={goods[item]['articul']}>
                        <tr>
                            <td><b>Name of the service:</b>  {goods[item]['title']}</td>
                            <td><b>Price:</b>  {goods[item]['cost'] + "$"}</td>
                            {/* <td><button className="delete" data-key={goods[item]['articul']}>Delete</button></td> */}
                            
                        </tr>
                        
                    </table>
                    
                );
            })}
            <div className='total-amount'>
            <td><b>Total amount:</b> {totalSum + "$"}</td>

            </div>
           
        </>
    );
};

export default Cart;