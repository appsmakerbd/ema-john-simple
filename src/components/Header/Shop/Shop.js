import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import fakeData from '../../../fakeData';
import { addToDatabaseCart, getDatabaseCart } from '../../../utilities/databaseManager';
import Cart from '../../Cart/Cart';
import Product from '../../Product/Product';
import './Shop.css';

const Shop = () => {
    //console.log(fakeData);
    const first10=fakeData.slice(0,10);
    const [products,setProducts]=useState(first10);
    const [cart,setCart]=useState([]);

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

    const handleAddProduct=(product)=>{
        //console.log(product);
        const toBeAddedKey=product.key;
        const sameProductCount=cart.find(pd=>pd.key === toBeAddedKey);
        let newCart;
        let count=1;
        if (sameProductCount) {
            count=sameProductCount.Quantity+1;
            sameProductCount.Quantity=count;
            const others=cart.filter(pd => pd.key !== toBeAddedKey);
            newCart=[...others,sameProductCount];
        }else{
            product.Quantity=1;
            newCart=[...cart,product];
        }
        
        setCart(newCart);
        addToDatabaseCart(product.key,count);
    }

    return (
        <div className="product-container">
            
            <div className="products-area">
                    {

                        products.map(pd=><Product 
                            key={pd.key}
                            showButton={true}
                            handleAddProduct={handleAddProduct} 
                            product= {pd}
                            ></Product>)
                    }
            </div>

            <div className="cart-box">
                    <Cart cart={cart}>
                        <Link to="/review">
                            <button>Review Order</button>
                        </Link>
                    </Cart>
            </div>
            
        </div>
    );
};

export default Shop;