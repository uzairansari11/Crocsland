import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../Page/Home";
import { Login } from "../Page/Login";
import { Products } from "../Page/Products";
import Register from "../Page/Register";
import ProductDetails from "../Page/ProductDetails";
import { Cart } from "../Page/Cart";
export const AllRoute = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/product" element={<Products />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
        </Routes>
    );
};
