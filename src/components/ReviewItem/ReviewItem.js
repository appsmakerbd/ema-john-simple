import React from 'react';
import { Link } from 'react-router-dom';

const ReviewItem = (props) => {
    //console.log(props);
    const {name,Quantity,key,img}=props.product;
    return (
        <div className="product">
            <div className="image">
                <img src={img} />
            </div>

            <div className="detail">
                <Link to={"/product/"+key}>{name}</Link>
                <p>Quantity: {Quantity}</p>
                <button onClick={()=>props.removeProduct(key)}>Remove Item</button>
            </div>
        </div>
    );
};

export default ReviewItem;