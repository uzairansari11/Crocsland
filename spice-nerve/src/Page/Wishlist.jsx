import React, { useEffect } from "react";
import { Box, Button, Flex, Grid, Text, useToast } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
	addCartRequest,
	deleteWishlistApi,
	getCartRequest,
	getWishlistRequest,
} from "../Redux/Cart/api";
import { Loading } from "../Component/Loading";
import { WishlistCard } from "../Component/WishlistCard";
const Wishlist = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	let isLoading = false;
	const toast = useToast();
	const { isAuth, userID } = useSelector((store) => store.authReducer);
	const { wishlist, cart } = useSelector((store) => store.cartReducer);
	useEffect(() => {
		if (userID) {
			dispatch(getCartRequest(userID));
			dispatch(getWishlistRequest(userID));
		}
	}, [userID, dispatch]);

	const deleteHandler = (productID, size) => {
		let newWishlist = wishlist.filter((product) => {
			console.log(productID, size);
			return product.productID !== productID && product.size !== size;
		});
		dispatch(deleteWishlistApi(userID, newWishlist));
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

	const handleData = (
		size,
		data,
		collection,
		addCollectionRequest,
		successMessage,
	) => {
		if (!isAuth) {
			toast({
				title: "Please Login",
				status: "error",
				isClosable: true,
				position: "top",
			});
			return;
		}

		if (!size) {
			toast({
				title: "Please Add the Size",
				status: "error",
				isClosable: true,
				position: "top",
			});
			return;
		}

		if (collection.length === 0) {
			const productDetail = {
				productID: data.productID,
				size: size,
				image: data.image,
				offerPrice: data.offerPrice,
				quantity: 1,
				title: data.title,
				category: data.category,
				userID: userID,
				originalPrice: data.originalPrice,
			};

			dispatch(addCollectionRequest(userID, [...collection, productDetail])).then(
				(res) => {
					toast({
						title: `Product Added into ${successMessage}`,
						status: "success",
						isClosable: true,
						position: "top",
						duration: 1000,
					});
				},
			);
			return
		}

		const alreadyAdded = collection.filter((product) => {
			return product.productID === data.productID && product.size === size;
		});
		console.log(alreadyAdded, " already cart collection")
		console.log(data, "data  from wihslist")

		if (alreadyAdded.length >= 1) {
			toast({
				title: `Product Already Added In ${successMessage} Can,t Add `,
				variant: "subtle",
				status: "error",
				position: "top",
				duration: 1000,
				isClosable: true,
			});
			return;
		}



		const productDetail = {
			productID: data.productID,
			size: size,
			image: data.image,
			offerPrice: data.offerPrice,
			quantity: 1,
			title: data.title,
			category: data.category,
			userID: userID,
			originalPrice: data.originalPrice,
		};

		dispatch(addCollectionRequest(userID, [...collection, productDetail])).then(
			(res) => {
				toast({
					title: `Product Added into ${successMessage}`,
					status: "success",
					isClosable: true,
					position: "top",
					duration: 1000,
				});
			},
		);
	};

	const handleCartData = (size, data) => {

		handleData(size, data, cart, addCartRequest, "Cart");
	};

	return (
		<>
			<Box minH={"70vh"} pos={"relative"}>
				<Text mt={4} as={"h4"} color={"red"} fontWeight="bold" fontSize={"lg"}>
					Your Wishlist
				</Text>
				<Grid
					borderBottomWidth={"1px"}
					templateColumns={{
						base: "repeat(2,1fr)",
						md: "repeat(2,1fr)",
						lg: "repeat(3,1fr)",
						xl: "repeat(4,1fr)",
					}}
					p={{ base: "5px", md: "1.5rem" }}
					minHeight={"80vh"}
					rowGap={{ base: "0.8rem", md: "2rem" }}
					justifyItems={"center"}
				>
					{isLoading ? (
						<Loading />
					) : wishlist.length ? (
						wishlist?.map((item) => {
							return (
								<WishlistCard
									key={item.id + item.size}
									data={item}
									deleteHandler={deleteHandler}
									handleCartData={handleCartData}
								/>
							);
						})
					) : (
						<Flex
							width={"full"}
							flexDir={"column"}
							pos={"absolute"}
							paddingTop={"3rem"}
							color={"gray.500"}
							justify={"center"}
							align={"center"}
						>
							<Text fontSize={"1.5rem"}>There are no products in your wishlist</Text>
							<Button
								mt={"2rem"}
								px="2rem"
								colorScheme="pink"
								onClick={() => {
									navigate("/women");
								}}
							>
								Browse Products
							</Button>
						</Flex>
					)}
				</Grid>
			</Box>
		</>
	);
};

export default Wishlist;
