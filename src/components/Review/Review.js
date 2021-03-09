import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import successImage from '../../images/giphy.gif';

const Review = () => {
    const [cart,setCart]=useState([]);

    //Removing product based on click
    const removeProduct=(removeProduct)=>{
        console.log('Removed'+removeProduct);
        const newProductArray=cart.filter(product => product.key !== removeProduct );
        setCart(newProductArray);
        removeFromDatabaseCart(removeProduct);
    }


    //Fetching local storage data
    useEffect(()=>{
        const savedCart=getDatabaseCart();
        const productKey=Object.keys(savedCart);
        const counts=productKey.map(key=>{
            const product=fakeData.find(pd=> pd.key ===key);
            //Object property assigning
            product.Quantity=savedCart[key];
            return product;
        });
        setCart(counts);
    },[])



    //Order Placing on click
    const [orderPlaced,setOrderPlaced]=useState(false);
    const placeOrderButton=()=>{
        //console.log('Ordered');
        setOrderPlaced(true);
        setCart([]);
        processOrder();
    }

    let successMessage;
    if(orderPlaced){
        successMessage=<img src={successImage} alt="successfully placed "/>
    }
    
    return (
        <div className="product-container">
            <div className="products-area">
                <h1>Order Summery | {cart.length} Items</h1>
                {
                    cart.map(pd=><ReviewItem removeProduct={removeProduct} product={pd}></ReviewItem>)
                }
                { successMessage }
            </div>


            <div className="cart-box">
                <Cart cart={cart}>
                    
                        <button onClick={placeOrderButton}>Place Order</button>
                   
                </Cart>
            </div>
            
        </div>
    );
};

export default Review;