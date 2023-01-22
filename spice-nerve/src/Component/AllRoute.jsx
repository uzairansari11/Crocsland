import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../Page/Home";
import { Login } from "../Page/Login";
import { Products } from "../Page/Products";
import Register from "../Page/Register";
import ProductDetails from "../Page/ProductDetails";
import { Cart } from "../Page/Cart";
import PaymentForm from "../Page/PaymentForm";
import OrderSuccessful from "../Page/OrderSuccessful";
export const AllRoute = () => {
    return (
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/product" element={<Products />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/cart" element={<Cart />} />
            <Route path="/payment" element={<PaymentForm />} />
            <Route path="/successful" element={<OrderSuccessful />} />

     </Routes>
    );
};
