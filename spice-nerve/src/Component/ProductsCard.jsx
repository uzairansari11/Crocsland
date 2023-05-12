import { Button } from "@chakra-ui/button";
import { Box, Flex, Text } from "@chakra-ui/layout";
import React, { useEffect, useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import SingleProductImageSlider from "./SingleProductImageSlider";
import { useDispatch, useSelector } from "react-redux";
import { Avatar, Select, Tooltip, useToast } from "@chakra-ui/react";
import { addCartRequest, addWishlistRequest, getCartRequest, getWishlistRequest } from "../Redux/Cart/api";
export const ProductsCard = (props) => {
	const data = props.data;
	const {
		id,
		title,
		offerPrice,
		originalPrice,
		discount,
		image,
		subCategory,
		rating,
		ratingCount,
		category,
		size,
	} = data;
	const [show, setShow] = useState(false);
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const toast = useToast();
	const [selectedSize, setSlectedSize] = useState("");
	const { cart, wishlist } = useSelector((store) => store.cartReducer);
	const { userID, isAuth } = useSelector((store) => store.authReducer);

	const handleCartData = (size, data) => {
		const alreadyAdded = cart.filter((product) => {
			return product.productID == data.id && product.size == size;
		});
		if (alreadyAdded.length >= 1) {
			toast({
				title: "Product Already  Added In Cart",
				variant: "subtle",
				status: "error",
				position: "top",
				duration: 1000,
				isClosable: true,
			});
			return;
		}

		if (!isAuth) {
			toast({
				title: `Please Login`,
				status: `error`,
				isClosable: true,
				position: "top",
			});
			return;
		}
		if (!size) {
			toast({
				title: `Please Add the Size`,
				status: `error`,
				isClosable: true,
				position: "top",
			});
			return;
		} else {
			let productDetail = {
				productID: data.id,
				size: size,
				image: data.image,
				offerPrice: data.offerPrice,
				quantity: 1,
				title: data.title,
				category: data.category,
				userID: userID,
				originalPrice: data.originalPrice,
			};

			dispatch(addCartRequest(userID, [...cart, productDetail])).then((res) => {
				toast({
					title: `Product Added into Cart`,
					status: `success`,
					isClosable: true,
					position: "top",
					duration: 1000,
				});
			});
		}
	};


	const handleWishlistData = (size, data) => {
		const alreadyAdded = wishlist.filter((product) => {
			return product.productID == data.id && product.size == size;
		});
		if (alreadyAdded.length >= 1) {
			toast({
				title: "Product Already  Added In Wishlist",
				variant: "subtle",
				status: "error",
				position: "top",
				duration: 1000,
				isClosable: true,
			});
			return;
		}

		if (!isAuth) {
			toast({
				title: `Please Login`,
				status: `error`,
				isClosable: true,
				position: "top",
			});
			return;
		}
		if (!size) {
			toast({
				title: `Please Add the Size`,
				status: `error`,
				isClosable: true,
				position: "top",
			});
			return;
		} else {
			let productDetail = {
				productID: data.id,
				size: size,
				image: data.image,
				offerPrice: data.offerPrice,
				quantity: 1,
				title: data.title,
				category: data.category,
				userID: userID,
				originalPrice: data.originalPrice,
			};

			dispatch(addWishlistRequest(userID, [...wishlist, productDetail])).then((res) => {
				toast({
					title: `Product Added into Wishlist`,
					status: `success`,
					isClosable: true,
					position: "top",
					duration: 1000,
				});
			});
		}
	};

	useEffect(() => {
		if (userID) {
			dispatch(getCartRequest(userID));
			dispatch(getWishlistRequest(userID));
		}
	}, []);
	return (
		<Box
			cursor={"pointer"}
			className="shadow"
			transition={"all 0.3s"}
			// height={{ base: "300px", md: "350px" }}
			width={{ base: "150px", md: "210px" }}
			onMouseEnter={() => {
				setShow(true);
			}}
			onMouseLeave={() => {
				setShow(false);
			}}
			boxShadow={"lg"}
			borderRadius={10}
			pb={"4"}
		>
			<Box>
				<SingleProductImageSlider
					images={image}
					rating={rating}
					ratingCount={ratingCount}
					id={id}
				/>
			</Box>
			<Box px="0px" bg="white">
				<Text
					fontWeight={"600"}
					fontSize="0.94rem"
					pl="10px"
					width="100%"
					overflow={"hidden"}
					whiteSpace="nowrap"
					textOverflow={"ellipsis"}
				>
					{subCategory}
				</Text>

				<Box position={"relative"} bg="white">
					<Text
						fontSize={"0.9rem"}
						color="gray.700"
						pl="10px"
						width="100%"
						overflow={"hidden"}
						whiteSpace="nowrap"
						textOverflow={"ellipsis"}
					>
						{title.substring(0, 30)}
					</Text>
					<Flex
						height={!show && "0"}
						className="wishlistlayer"
						flexDir={"column"}
						align="center"
						position={"absolute"}
						py={"1rem"}
						pb="0"
						bottom={"0"}
						bg="white"
						width={"full"}
						zIndex={show ? "1" : "-100"}
					>
						<Flex display={!show && "none"}>
							<Tooltip label="ADD TO BAG" placement="left-start">
								<Button size="sm" colorScheme="blue" height={10} width={14} mr={"2"}>
									<img
										width="24"
										height="24"
										src="https://img.icons8.com/android/24/shopping-bag.png"
										alt="shopping-bag"
										onClick={() => handleCartData(selectedSize, data)}
									/>
								</Button>
							</Tooltip>
							<Tooltip label="ADD TO WISHLIST" placement="right-start">
								<Button height={10} width={14} colorScheme="pink" ml={2}>
									<img
										width="24"
										height="24"
										src="https://img.icons8.com/ios-filled/24/like--v1.png"
										alt="like--v1"
										onClick={() => handleWishlistData(selectedSize, data)}
									/>
								</Button>
							</Tooltip>
						</Flex>
					</Flex>
				</Box>
				<Text fontWeight={"bold"} fontSize="0.84rem" my="0.1rem" pl="10px">
					Rs. {offerPrice || 456}{" "}
					<Text
						as="span"
						textDecoration={"line-through"}
						fontWeight="300"
						fontSize="0.8rem"
					>
						Rs.{originalPrice}
					</Text>
					<Text as="span" color={"pink.400"} fontSize="0.7rem" px="4px">
						({discount || "54%"}% off)
					</Text>
				</Text>
				<Select
					textAlign={"center"}
					placeholder="Sizes"
					width={"60%"}
					height={6}
					margin={"auto"}
					onChange={(e) => setSlectedSize(e.target.value)}
				>
					{size.map((ele, index) => {
						return (
							<option key={+index} value={ele} textAlign={"center"}>
								{ele}
							</option>
						);
					})}
				</Select>
			</Box>
		</Box>
	);
};
