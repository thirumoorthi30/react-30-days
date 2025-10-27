import React, { useState, useEffect, use } from "react";
import useFetch from "../Custom-Hook/useFetch";
import { MdAddShoppingCart } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

let url = "http://localhost:5000/products";
let url1 = "https://fakestoreapi.com/products";
function ProductList() {
  //   const [products, setProducts] = useState([]);
  //   const [error, setError] = useState("");
  //   const [loading, setLoading] = useState(true);

  //   useEffect(() => {
  //     fetch("http://localhost:4000/products", { method: "GET" })
  //       .then((response) => {
  //         if (response.ok){
  //         return response.json();
  //         }
  //         else{
  //             throw new Error("Something went wrong ...");
  //         }
  //   })
  //       .then((data) => {
  //         setProducts(data);
  //   })

  //       .catch( (error) => {
  //         console.log(error.message);
  //         setError(error.message);
  //       })
  //       .finally( () => {
  //         setLoading(false);
  //       })
  //   }, []);
  let reDirect = useNavigate();

  let { products, error, loading, setProducts } = useFetch(url);

  let handleDelete = (id) => {
    axios.delete(`http://localhost:5000/products/${id}`).then(() => {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d6a130ff",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        }
      });
      let newProductList = products.filter((product) => product.id !== id);
      setProducts(newProductList);
    });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <h1 className="text-2xl font-bold text-gray-700">Loading...</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <h1 className="text-2xl font-bold text-red-500">Error: {error}</h1>
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex items-center justify-between mb-6">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Product List - {products.length}
      </h1>

       <button
        className="px-4 py-2 bg-red-600 text-white text-sm font-medium rounded-lg hover:bg-red-700 transition-colors"
        onClick={() => reDirect("/new-product")}
      >
        + Add Product
      </button>
      </div>

      {products.length === 0 ? (
        <p className="text-center text-gray-600">No products found.</p>
      ) : (
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
                {/* <p className="text-gray-600 mb-2">{product.description}</p> */}
                <p className="font-bold text-blue-600 mb-2">${product.price}</p>
                <div className="flex items-center justify-between mt-2">
                  <div>
                    <p className="text-sm text-gray-500">
                      Category: {product.category}
                    </p>
                    {product.rating && (
                      <p className="text-sm text-yellow-500">
                        Rating: {product.rating.rate} ({product.rating.count})
                      </p>
                    )}
                  </div>

                  <button className="px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors">
                    <MdAddShoppingCart />
                  </button>
                  <button
                    className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
                    onClick={() => {
                      reDirect(`/update-product/${product.id}`);
                    }}
                  >
                    <FaEdit />
                  </button>
                  <button
                    className="px-4 py-2 bg-red-600 text-white text-sm font-medium rounded-lg hover:bg-dark-700 transition-colors"
                    onClick={() => {
                      handleDelete(product.id);
                    }}
                  >
                    <MdDelete />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductList;
