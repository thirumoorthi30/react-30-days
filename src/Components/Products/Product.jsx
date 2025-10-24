import React, { useState, useEffect } from "react";
import ProductDetails1 from "./ProductDetails1";
import ProductList from "./ProductList";
import { Link, Outlet, useNavigate } from "react-router-dom";

const Product = () => {

    return (
        <div>
            <Outlet />
        </div>
    );
};

export default Product;