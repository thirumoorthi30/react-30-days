// import React from "react";

// const ProductItems = (props) => {
//     console.log(props);

//     let {product} =props; // here destructure will be done from the props where the key will be the product that will pass from the parent we can use that name to destrucre the props then only we can access the <object data=" type="" className=""></object>

//     console.log(product);
//     return(
//         <div>
//             <h1> List of ProductItems</h1>
//         </div>
//     );
// }

// export default ProductItems;


//or we can use like this 

import React from "react";
import ProductDetails from "./ProductDetails";

const ProductItems = ({product}) => { //her also we can destructure using the object literal.


     

    console.log(product);
    return(
        <div>
            <h1> List of ProductItems</h1>
            
        <ProductDetails 
         deepName = {product.name}
         deepPrice = {product.price}
         deepDescription = {product.description}/>
        </div>
    );
}

export default ProductItems;