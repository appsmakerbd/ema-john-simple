import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';
import { Link } from 'react-router-dom';

const Product = (props) => {
    console.log(props.product);
    const {img,name,seller,price,stock,key}=props.product;
    return (
        <div className="product">
            <div className="image">
                <img src={img} />
            </div>

            <div className="detail">
                <h2><Link to={"/product/"+key}>{name}</Link></h2>
                <h4>By: {seller}</h4>
                <p>${price}</p>
                <p>Only {stock} left in stock. -Order Soon</p>
                {/*without parameter evabe <button onClick={props.handleAddProduct} ><FontAwesomeIcon icon={faShoppingCart} /> Add to Cart</button> */}
                {props.showButton && <button onClick={()=>props.handleAddProduct(props.product)} ><FontAwesomeIcon icon={faShoppingCart} /> Add to Cart</button>}
            </div>
            
        </div>
    );
};

export default Product;