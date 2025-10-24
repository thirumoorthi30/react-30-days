import React, { useState, useEffect } from "react";
import ProductDetails1 from "./ProductDetails1";
import ProductList from "./ProductList";
import { Link, Outlet, useNavigate } from "react-router-dom";

const Product = () => {
    let [count, setCount] = useState(0);
    let [count1, setCount1] = useState(0);

    //call back function:
    // this will be execute every time state update
    // useEffect(() => {
    //     console.log("every time");
    // });

    // call back fun with 2nd parameter dependencies array: 
    //it will excute at initial execution only even id state update
    // useEffect(() => {
    //     console.log("one initial time");
    // }, []);

    // call back fun with 2nd parameter dependencies array: 
    //where every the count1 update it will excute 
     useEffect(() => {
        console.log("only dependencies update");
    }, [count1]);


    console.log("intial render");


    let navigate = useNavigate();
    const handleback = () => {
        navigate("/home");
    }
    return (
        <div>
            <h1>Product - parent - nested route</h1>
            <button onClick={() => setCount(count + 1)}>Increase - {count}</button>
            {/* <Link to="details">Details</Link>
            <Link to="list">List</Link> */}
            <button onClick={ () => setCount1 (count1 + 1)}>Increase 1 - {count1}</button>
            <Outlet />
            <button onClick = { handleback }> Back to Home</button>
        </div>
    );
};

export default Product;