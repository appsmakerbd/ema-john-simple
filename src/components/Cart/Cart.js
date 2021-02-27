import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart=props.cart;

    const formatNumber=(num)=>{
        const theValue=num.toFixed(2);
        return Number(theValue);
    }
    
    //total using reduce
    //const total=cart.reduce((total,prd) => total+prd.price,0);

    //Total traditional way
    let total=0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total=formatNumber(total+product.price);
    }


    let shipping=0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        shipping=formatNumber(shipping+product.shipping);
    }

    const tax=formatNumber((total/15));
    const grandTotal=formatNumber(total+shipping+tax);

    
    return (
        <div className="cart-detail">
            <h1>Order Summery</h1>
            <h4>Item Ordered: {cart.length} </h4>
            <p>Total Item Price: ${total}</p>
            <p>Shipping: ${shipping}</p>
            <p>Total Before Tax: ${formatNumber(total+shipping)}</p>
            <p>Estimated Tax: ${tax}</p>
            <h3>Order Total: ${grandTotal}</h3>

        </div>
    );
};

export default Cart;