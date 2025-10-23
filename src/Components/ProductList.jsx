import React, { useState, useEffect, use } from "react";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:4000/products", { method: "GET" })
      .then((response) => {
        response.json();
  })
      .then((data) => {
        setProducts(data);
  })

      .catch( (error) => {
        console.log(error.message);
        setError(error.message);
      })
      .finally( () => {
        setLoading(false);
      })
  }, []);

  if(loading){
    <div>
        <h1>Loading...</h1>
    </div>
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">Product List</h1>
     { products.length !== 0 && 
         
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-contain p-4 bg-gray-50"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
              <p className="text-gray-600 mb-2">{product.description}</p>
              <p className="font-bold text-blue-600 mb-2">${product.price}</p>
              <p className="text-sm text-gray-500 mb-2">
                Category: {product.category}
              </p>
               <div className="flex items-center justify-between mt-2">
                <div>
                  <p className="text-sm text-gray-500">
                    Category: {product.category}
                  </p>
                  <p className="text-sm text-yellow-500">
                    Rating: {product.rating.rate} ({product.rating.count})
                  </p>
                </div>
                <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors">
                  Add to cart
                </button>
              </div>
              </div>
          </div>
        ))}
      </div>}
      {error && <p>{error}</p>}
    </div>
  );
}

export default ProductList;
