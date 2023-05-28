import React from "react";
import { Box, Text, Image, Button, Flex } from "@chakra-ui/react";
import { Link as ReactLink } from "react-router-dom";

export const WishlistCard = (props) => {
	const data = props.data;
	const deleteHandler = props.deleteHandler;
	const handleCartData = props.handleCartData;
	const { image, title, size, offerPrice, quantity, originalPrice, productID } =
		data;
	return (
		<Flex
			justifyContent="space-between"
			flexDirection="column"
			height={["auto", 120]}
			width={["100%", "auto"]}
			borderRadius={8}
		>
			<ReactLink to={`/product/${productID}`}>
				<Flex justifyContent="center">
					<Image src={image} alt={title} height={["auto", 100]} objectFit="cover" />
				</Flex>
			</ReactLink>
			<Box mt={4}>
				<Text fontSize="sm" fontWeight="bold" mb={2}>
					{title}
				</Text>
				<Flex justifyContent={"space-around"} mb={2}>
					<Text fontSize="sm" pr={2}>
						₹ {offerPrice}
					</Text>
					<Text textDecoration="line-through" fontSize="sm" color="gray.400">
						₹ {originalPrice}
					</Text>
					<Text fontSize="sm" pr={2}>
						size : {size}
					</Text>
				</Flex>
				<Flex justifyContent="center" gap="6">
					<Button
						colorScheme="blue"
						size="xs"
						height={8}
						width={10}
						onClick={() => handleCartData(size, data)}
					>
						<img
							src="https://img.icons8.com/android/24/shopping-bag.png"
							alt="shopping-bag"
						/>
					</Button>
					<Button
						colorScheme="pink"
						size="xs"
						height={8}
						width={10}
						ml={2}
						onClick={() => deleteHandler(productID, size)}
					>
						<img
							src="https://img.icons8.com/color/48/delete-forever.png"
							alt="delete-forever"
						/>
					</Button>
				</Flex>
			</Box>
		</Flex>
	);
};
