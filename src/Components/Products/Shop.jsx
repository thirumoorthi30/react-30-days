import React, { useState } from "react";
import ProductItems from "./ProductItem";

const Shop = () => {
    const [product, setProduct] = useState({name: "iphone", price: 12000, description: "phone is good"});
    return(  
    <div>
        <h1>Welcome to the shop </h1>
        <ProductItems product = {product}/>
        </div>
    );
};

export default Shop;