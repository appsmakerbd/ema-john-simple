import React from 'react';
import { useParams } from 'react-router';
import fakeData from '../../fakeData';
import Product from '../Product/Product';

const ProductDetail = () => {
    const {productKey}=useParams()
    const product=fakeData.find(pd => pd.key === productKey);
    const {img,name,seller,price,stock,key}=product;
    console.log(product);
    return (
        <div>
            <h1>Product ID {productKey} Detail</h1>
            <Product showButton={false} product={product}></Product>
        </div>
    );
};

export default ProductDetail;