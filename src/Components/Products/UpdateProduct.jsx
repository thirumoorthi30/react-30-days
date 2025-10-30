import React, { useEffect } from "react";
import {useState} from "react";
import { RiDeleteBackFill } from "react-icons/ri";
import { redirect, useNavigate, useParams } from "react-router-dom";

const UpdateProduct = () => {
   const [updateProduct, setUpdateProduct] = useState(null);
   const reBack = useNavigate();

      let {id} = useParams();
      console.log(id);

      useEffect( () => {
        fetch(`http://localhost:5000/products/${id}`)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            console.log(data);
        
        setUpdateProduct({
            title: data.title,
            price: data.price,
            description: data.description,
            category: data.category,
            image: data.image,
            rate: data.rating.rate,
            count: data.rating.count
        })
    })
     .catch((error) => console.error("Error fetching product:", error));
      },[])

    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setUpdateProduct({ ...updateProduct, [name]: value });
      };
    
      const handleUpdate = (e) => {
        e.preventDefault();
         fetch(`http://localhost:5000/products/${id}`, {
          method: "PUT",
          headers: {
            contentType: "application/json"
          },
          body: JSON.stringify(updateProduct)
         })
         .then( () => {
          alert("Updated successfully");
          reBack("/product");         
         })
      }
    
      if(updateProduct !== null){
      return (
        <div className="max-w-lg mx-auto bg-bgColor p-6 rounded-lg shadow-md mt-10">
          <h2 className="text-2xl font-semibold mb-4 text-center">Update Product</h2>
    
          <form onSubmit={handleUpdate} className="space-y-4">
    
            <div>
              <label className="block text-gray-700 font-medium mb-1">Title</label>
              <input
                type="text"
                name="title"
                placeholder="Enter product title"
                value={updateProduct.title}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-400 outline-none"
                required
              />
            </div>
    
            <div>
              <label className="block text-gray-700 font-medium mb-1">Price ($)</label>
              <input
                type="number"
                name="price"
                placeholder="Enter price"
                value={updateProduct.price}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-400 outline-none"
                required
              />
            </div>
    
            <div>
              <label className="block text-gray-700 font-medium mb-1">Description</label>
              <textarea
                name="description"
                placeholder="Enter product description"
                value={updateProduct.description}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-400 outline-none"
                rows="3"
                required
              ></textarea>
            </div>
    
            <div>
              <label className="block text-gray-700 font-medium mb-1">Category</label>
              <input
                type="text"
                name="category"
                placeholder="e.g., men's clothing"
                value={updateProduct.category}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-400 outline-none"
                required
              />
            </div>
    
            <div>
              <label className="block text-gray-700 font-medium mb-1">Image URL</label>
              <input
                type="text"
                name="image"
                placeholder="https://example.com/image.png"
                value={updateProduct.image}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-400 outline-none"
              />
            </div>
    
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 font-medium mb-1">Rating (rate)</label>
                <input
                  type="number"
                  step="0.1"
                  name="rate"
                  placeholder="e.g., 4.5"
                  value={updateProduct.rate}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-400 outline-none"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">Rating Count</label>
                <input
                  type="number"
                  name="count"
                  placeholder="e.g., 120"
                  value={updateProduct.count}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-400 outline-none"
                />
              </div>
            </div>
    
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition duration-300"
            >
              Save Product
            </button>
          </form>
        </div>
      );
    }
    else{
      return(<div className="text-center text-2xl text-gray-600">No product to update</div>);
    }
};

export default UpdateProduct;