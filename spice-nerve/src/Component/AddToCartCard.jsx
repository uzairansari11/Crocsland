import React from "react";
import { Box, Text, Image, Button, Flex } from "@chakra-ui/react";
import { MdMoreTime } from "react-icons/md";
import { Link as ReactLink } from "react-router-dom";
export const AddToCartCard = ({
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
			justifyContent={"space-between"}
			boxShadow={
				"rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
			}
			padding={2}
		>
			<Flex gap={4}>
				<ReactLink to={`/product/${productID}`}>
				<Image h={"140px"} src={image} />
				</ReactLink>
				<Box>
					<Text style={{ fontSize: "12px" }} fontWeight={'black'}>{title}</Text>
					<Flex gap={6}>
						<Text> size : {size}</Text>
						<Button
							fontSize={"md"}
							size="xs"
							isDisabled={quantity === 1}
							onClick={() => handleUpdateQuantity(-1, productID, size)}
						>
							-
						</Button>
						<Text>{quantity}</Text>
						<Button
							fontSize={"md"}
							size="xs"
							isDisabled={quantity === 4}
							onClick={() => handleUpdateQuantity(1, productID, size)}
						>
							+
						</Button>
					</Flex>
					<Flex py="0.4rem">
						<Text fontSize={"0.9rem"} pr={"0.5rem"}>
							₹ {offerPrice}
						</Text>
						<Text
							textDecoration={"line-through"}
							fontSize={"0.9rem"}
							color="gray.400"
						>
							₹ {originalPrice}
						</Text>
					</Flex>

					<Flex>
						<MdMoreTime />{" "}
						<Text style={{ fontSize: "10px" }}> 14 Days return Avilalble</Text>
					</Flex>
				</Box>
			</Flex>
			<Button
				backgroundColor={"#ffffff"}
				onClick={() => deleteHandler(productID, size)}
			>
				x
			</Button>
		</Flex>
	);
};
