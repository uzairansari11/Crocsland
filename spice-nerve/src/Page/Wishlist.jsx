import React, { useEffect } from "react";
import {
	Box,
	Button,
	Flex,
	Grid,
	Skeleton,
	Stack,
	Text,
} from "@chakra-ui/react";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCartRequest, getWishlistRequest } from "../Redux/Cart/api";
import { Loading } from "../Component/Loading";
import { WishlistCard } from "../Component/WishlistCard";
const Wishlist = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	let isLoading = false;
	const { isAuth, userID } = useSelector((store) => store.authReducer);
	const { wishlist } = useSelector((store) => store.cartReducer);
	useEffect(() => {
		if (userID) {
			dispatch(getCartRequest(userID));
			dispatch(getWishlistRequest(userID));
		}
	}, [userID]);
	return (
		<>
			<Box>
				<Grid
					borderBottomWidth={"1px"}
					templateColumns={{
						base: "repeat(1,1fr)",
						sm: "repeat(2,1fr)",
						lg: "repeat(3,1fr)",
						xl: "repeat(4,1fr)",
					}}
					p={{ base: "5px", md: "1.5rem" }}
					rowGap={{ base: "0.8rem", md: "2rem" }}
					columnGap={{ base: "0.8rem", md: "2rem" }}
					justifyItems={"space-between"}
				>
					{isLoading ? (
						<Loading />
					) : wishlist.length ? (
						wishlist?.map((item) => {
							return <WishlistCard key={item.id} {...item} />;
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
							<Text textAlign={"center"} fontSize={"1.5rem"}>
								There are no products in your wishlist
							</Text>
							<Button
								mt={"2rem"}
								px="2rem"
								colorScheme="pink"
								onClick={() => {
									navigate("/product/MensData");
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
