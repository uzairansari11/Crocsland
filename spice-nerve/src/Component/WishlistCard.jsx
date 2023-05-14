import React from "react";
import { Box, Text, Image, Button, Flex } from "@chakra-ui/react";
import { MdMoreTime } from "react-icons/md";
import { Link as ReactLink } from "react-router-dom";

export const WishlistCard = ({
	image,
	title,
	size,
	offerPrice,
	quantity,
	originalPrice,
	productID,
	deleteHandler,
	handleUpdateQuantity,
}) => {
	return (
		<Flex
			justifyContent="space-between"
			flexDirection="column"
			boxShadow="md"
			p={4}
			maxWidth={300}
			borderRadius={8}
			bg="white"
		>
			<ReactLink to={`/product/${productID}`}>
				<Image src={image} alt={title} height={120} objectFit="cover" />
			</ReactLink>
			<Box mt={4}>
				<Text fontSize="sm" fontWeight="bold" mb={2}>
					{title}
				</Text>
				<Flex align="center" mb={2}>
					<Text fontSize="sm" pr={2}>
						₹ {offerPrice}
					</Text>
					<Text textDecoration="line-through" fontSize="sm" color="gray.400">
						₹ {originalPrice}
					</Text>
				</Flex>
				<Flex align="center" mb={2}>
					<MdMoreTime />
					<Text fontSize="xs" ml={1}>
						14 Days return available
					</Text>
				</Flex>
			</Box>
			<Flex justify="space-between" mt={4}>
				<Button
					colorScheme="blue"
					size="sm"
					onClick={() => handleUpdateQuantity(-1, productID, size)}
				>
					-
				</Button>
				<Flex align="center">
					<Text fontSize="sm" mx={2}>
						{quantity}
					</Text>
					<Button
						colorScheme="blue"
						size="sm"
						onClick={() => handleUpdateQuantity(1, productID, size)}
					>
						+
					</Button>
				</Flex>
				<Button
					colorScheme="red"
					size="sm"
					onClick={() => deleteHandler(productID, size)}
				>
					Remove
				</Button>
			</Flex>
		</Flex>
	);
};
