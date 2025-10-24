import React, {useContext} from "react";
import PropTypes from "prop-types";
import {userContext} from "../../App";

const ProductDetails = ({deepName = "DefaultName", deepPrice = 20000, deepDescription = "iphone india"}) => {

    let {user} =useContext(userContext);

    //console.log(user);
    return (
       <section className="max-w-sm bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6 flex flex-col items-center text-center border border-gray-100">
  <img
    src={deepName || "https://via.placeholder.com/150"}
    alt={deepName}
    className="w-40 h-40 object-cover rounded-xl mb-4"
  />

   <h3 className="text-xl font-semibold text-gray-800 mb-2">
   USER NAME: {user.name}, Email: {user.email}
  </h3>

  <h3 className="text-xl font-semibold text-gray-800 mb-2">
    {deepName}
  </h3>

  <p className="text-lg font-bold text-green-600 mb-2">
    ₹{deepPrice}
  </p>

  <p className="text-sm text-gray-600 mb-4">
    {deepDescription}
  </p>

  <button className="px-5 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors">
    Add to Cart
  </button>
</section>
    );
};

export default ProductDetails;

ProductDetails.defaultProps = {
    deepName: "Default Name",
    deepPrice: 0,
    deepDescription: "Default Description"
}

ProductDetails.protoType = {
    deepName: PropTypes.string.isRequired,
    deepPrice: PropTypes.number.isRequired,
    deepDescription: PropTypes.string.isRequired
}