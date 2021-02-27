import React, { useState } from 'react';
import fakeData from '../../../fakeData';
import Cart from '../../Cart/Cart';
import Product from '../../Product/Product';
import './Shop.css';

const Shop = () => {
    //console.log(fakeData);
    const first10=fakeData.slice(0,10);
    const [products,setProducts]=useState(first10);
    const [cart,setCart]=useState([]);

    const handleAddProduct=(product)=>{
        //console.log(product);
        const newCart=[...cart,product];
        setCart(newCart);
        console.log(newCart);
    }

    return (
        <div className="product-container">
            
            <div className="products-area">
                    {
                        products.map(pd=><Product handleAddProduct={handleAddProduct} product= {pd}></Product>)
                    }
            </div>

            <div className="cart-box">
                    <Cart cart={cart}></Cart>
            </div>
            
        </div>
    );
};

export default Shop;