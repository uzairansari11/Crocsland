import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AddToCartCard } from "../Component/AddToCartCard";
import { Stack, Box, Grid, useToast } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import {
	deleteCartApi,
	getCartRequest,
	updateCartApi,
} from "../Redux/Cart/api";
export const Cart = () => {
	const dispatch = useDispatch();
	const { isAuth, userID } = useSelector((store) => store.authReducer);
	const { cart } = useSelector((store) => store.cartReducer);
	const toast = useToast();
	const navigate = useNavigate();
	console.log(cart);
	const deleteHandler = (productID, size) => {
		let newCart = cart.filter((product) => {
			return product.id != productID && product.size != size;
		});
		dispatch(deleteCartApi(userID, newCart));
		toast({
			title: "Deleted Successfully",
			description: "Product deleted from cart",
			variant: "subtle",
			status: "success",
			position: "top",
			duration: 1000,
			isClosable: true,
		});
	};
	const handleUpdateQuantity = (value, productID, size) => {
		let newCart = cart.map((product) => {
			return product.productID == productID && product.size == size
				? { ...product, quantity: product.quantity + value }
				: product;
		});
		dispatch(updateCartApi(userID, newCart));
	};
	useEffect(() => {
		if (userID) {
			dispatch(getCartRequest(userID));
		}
	}, [userID]);
	return (
		<Box
			display={"flex"}
			flexDirection={{ base: "column", md: "row" }}
			width={{ base: "100%", md: "40%" }}
			justifyContent={"space-around"}
		>
			<Stack
				display={"flex"}
				width={"100%"}
				gap={6}
				p={4}
				justifyContent={"left"}
			>
				<Grid gap={2} mt={"10px"}>
					{cart?.map((ele) => (
						<AddToCartCard
							key={ele.productID + ele.size}
							{...ele}
							deleteHandler={deleteHandler}
							handleUpdateQuantity={handleUpdateQuantity}
						/>
					))}
				</Grid>
			</Stack>
		</Box>
	);
};
