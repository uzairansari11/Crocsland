import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useToast } from "@chakra-ui/react";
import {
	Box,
	Flex,
	Image,
	Popover,
	PopoverArrow,
	PopoverBody,
	PopoverCloseButton,
	PopoverContent,
	PopoverHeader,
	PopoverTrigger,
	Text,
	Button,
	Avatar,
} from "@chakra-ui/react";
import { BsBag, BsPerson } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { getCartRequest } from "../Redux/Cart/api";
import { userLogout } from "../Redux/Authentication/action";

import MegaMenu from "./MegaMenu";
import Sidebar from "./Sidebar";
import Searchbar from "./Searchbar";
export const Navbar = () => {
	const dispatch = useDispatch();
	const { userID, name } = useSelector(({ authReducer }) => authReducer);
	const { cart, wishlist } = useSelector(({ cartReducer }) => cartReducer);
	const { loading } = useSelector(({ authReducer }) => authReducer);
	const toast = useToast();

	const handleLogout = () => {
		localStorage.removeItem("userResponse");
		dispatch(userLogout());
		toast({
			title: "Logout successful",
			status: "success",
			duration: 3000,
			isClosable: true,
		});
	};

	useEffect(() => {
		if (userID) {
			dispatch(getCartRequest(userID));
		}
	}, [userID]);

	return (
		<Box
			position={"sticky"}
			top="0"
			zIndex={"100"}
			bg="white"
			boxShadow="0px 7px 7px -5px rgba(120,108,120,0.2)"
		>
			<Flex
				height={{ base: "3.2rem", md: "4.94rem" }}
				px={{ base: "1rem", md: "3rem" }}
				gap="2rem"
				justify={"space-between"}
				align={"center"}
			>
				<Link to="/">
					<Box minW={"6rem"}>
						<Image
							src="https://i.ibb.co/tX9nZsT/Peachpuff-Brush-Stroke-Photography-Logo-1-removebg-preview.png"
							alt="logo"
							width="12rem"
							height={{ base: "5rem", md: "100%" }}
						/>
					</Box>
				</Link>
				<MegaMenu />
				<Box minWidth={"10rem"} width="30rem" display={{ base: "none", lg: "block" }}>
					<Searchbar />
				</Box>
				<Flex gap={{ base: "1rem", md: "2rem" }} align="center">
					<Popover>
						<PopoverTrigger>
							<Flex flexDir={"column"} align={"center"} cursor="pointer">
								<Text>
									{!userID ? <BsPerson fontSize={"1.26rem"} /> : <Avatar name={name} size="sm" />}
								</Text>
								<Text
									fontSize={"0.8rem"}
									fontWeight="bold"
									display={{ base: "none", md: "block" }}
									color={"blackAlpha.600"}
								>
									{!userID ? "Profile" : ""}
								</Text>
							</Flex>
						</PopoverTrigger>
						<PopoverContent>
							<PopoverArrow />
							<PopoverCloseButton />
							<PopoverHeader py="1rem"></PopoverHeader>
							<PopoverBody>
								<Flex flexDir={"column"} gap="3" textTransform={"capitalize"}>
									{!userID ? (
										<Link to="/login">
											<Text pl="2rem" bg="gray.100" borderRadius={"md"} py="0.5rem">
												Signin / Signup
											</Text>
										</Link>
									) : (
										<Box pl="2rem" bg="gray.100" borderRadius={"md"} py="0.3rem">
											<Text fontWeight={"800"}>Hello,</Text>
											<Text>{name}</Text>
										</Box>
									)}
									{userID && (
										<Link to="/profile">
											<Text pl="2rem">Profile</Text>
										</Link>
									)}

									{/* <Link to="/profile">
										<Text pl="2rem">orders</Text>
									</Link> */}
									<Link to="/wishlist">
										<Text pl="2rem">Wishlists</Text>
									</Link>
									{/* <Link to="#">
										<Text pl="2rem">gift cards</Text>
									</Link> */}
									<Link to="#">
										<Text pl="2rem">contact us</Text>
									</Link>
									{userID && (
										<Link>
											<Button width="full" onClick={handleLogout}>
												Logout
											</Button>
										</Link>
									)}
								</Flex>
							</PopoverBody>
						</PopoverContent>
					</Popover>
					<Link to="/wishlist">
						<Flex flexDir={"column"} align={"center"} pos={"relative"}>
							<Text>
								<AiOutlineHeart fontSize={"1.26rem"} />
							</Text>
							<Text
								fontSize={"0.8rem"}
								fontWeight="bold"
								// display={{ base: "none", md: "block" }}
								color={"blackAlpha.600"}
							>
								Wishlist{" "}
								{userID && wishlist &&(
									<Flex
										justify={"center"}
										align="center"
										pos={"absolute"}
										top="-5px"
										right="-2px"
										width="20px"
										height="20px"
										color="white"
										borderRadius={"50%"}
										bg="pink.400"
									>
										{wishlist.length}
									</Flex>
								)}
							</Text>
						</Flex>
					</Link>
					<Link to="/cart">
						<Flex flexDir={"column"} align={"center"} pos="relative">
							<Text>
								<BsBag fontSize={"1.26rem"} />
							</Text>
							<Text
								fontSize={"0.8rem"}
								fontWeight="bold"
								// display={{ base: "none", md: "block" }}
								color={"blackAlpha.600"}
							>
								Bag
								{userID && (
									<Flex
										justify={"center"}
										align="center"
										pos={"absolute"}
										top="-5px"
										right="-12px"
										width="20px"
										height="20px"
										color="white"
										borderRadius={"50%"}
										bg="pink.400"
									>
										{cart.length}
									</Flex>
								)}
							</Text>
						</Flex>
					</Link>
					<Box display={{ lg: "none" }}>
						<Sidebar userID={userID} handleLogout={handleLogout} />
					</Box>
				</Flex>
			</Flex>
			<Box padding={"8px"} display={{ lg: "none" }}>
				<Searchbar />
			</Box>
		</Box>
	);
};
