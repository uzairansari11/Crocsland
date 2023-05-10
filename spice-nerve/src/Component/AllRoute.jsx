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
import Search from "../Page/Search";
import { Men } from "../Page/Men";
import { Women } from "../Page/Women";
import { Kid } from "../Page/Kid";
export const AllRoute = () => {
	return (
		<Routes>
			{/* All Pages Routing  */}
			<Route path="/" element={<Home />} />
			<Route path="/product/:id" element={<ProductDetails />} />
			<Route path="/cart" element={<Cart />} />
			<Route path="/payment" element={<PaymentForm />} />
			<Route path="/successful" element={<OrderSuccessful />} />
			<Route path="/product" element={<Products />} />

			<Route path="/men" element={<Men />} />
			<Route path="/women" element={<Women />} />
			<Route path="/kid" element={<Kid />} />
			{/* Login And Signup Route */}
			<Route path="/register" element={<Register />} />
			<Route path="/login" element={<Login />} />

			{/* Not Found Page Route  */}
			<Route path="*" element={<h1>NO PAGE FOUND</h1>} />
		</Routes>
	);
};
