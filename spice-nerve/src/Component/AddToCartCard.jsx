import React from "react";
import {
	HStack,
	Box,
	Card,
	Text,
	Heading,
	Image,
	Stack,
	CardBody,
	Center,
	Button,
	IconButton,
	VStack,
} from "@chakra-ui/react";
import { MinusIcon, AddIcon } from "@chakra-ui/icons";
import axios from "axios";
import { useState, useContext, useEffect } from "react";
import { cartQuantityContext } from "../Context/CartQunatityContext";
let qty = 1;
export const AddToCartCard = ({
	image,
	title,
	price,
	size,
	id,
	cartDataFromApi,
}) => {
	const { totalItem } = useContext(cartQuantityContext);
	const [quantityOfProduct, setquantityOfProduct] = useState(1);
	const deleteDataFromApi = (data) => {
		axios.delete(`https://crabby-culottes-ant.cyclic.app/cart/${data}`);
		cartDataFromApi();
	};
	const handleDelete = (data) => {
		deleteDataFromApi(data);
		totalItem(-1);
	};
	const handleQuantity = (data, id) => {
		qty = qty + data;
		updateProductQuantityInApi(id, qty);
	};

	const updateProductQuantityInApi = (id, qty) => {
		fetch(`https://crabby-culottes-ant.cyclic.app/cart/${id}`, {
			method: "PATCH",
			body: JSON.stringify({
				quantity: qty,
			}),
			headers: {
				"Content-type": "application/json",
			},
		})
			.then((response) => response.json())
			.then((json) => {
				setquantityOfProduct(json.quantity);
			});
		cartDataFromApi();
	};

	useEffect(() => {}, [quantityOfProduct]);
	return (
		<Card maxW="sm">
			<CardBody bgGradient="linear(to-l, #E2E8F0)">
				<Image src={image} alt={title} borderRadius="lg" />
				<Stack spacing="3">
					<Heading size="sm">{title}</Heading>
					<Center>
						<HStack>
							<Text color="black" fontSize="sm">
								Size: {size}
							</Text>
							<Text color="black" fontSize="sm">
								Price: ${Math.round(price * quantityOfProduct)}
							</Text>
							<Text color="black" fontSize="sm">
								Qty: {quantityOfProduct} No.
							</Text>
						</HStack>
					</Center>
				</Stack>
			</CardBody>
			<Center>
				<Box w={"40"}>
					<Center>
						<HStack mb={"4"}>
							<IconButton
								aria-label="Add to friends"
								icon={<MinusIcon />}
								colorScheme="teal"
								size="xs"
								isDisabled={quantityOfProduct === 1}
								onClick={() => handleQuantity(-1, id)}
							/>

							<IconButton
								aria-label="Add to friends"
								icon={<AddIcon />}
								colorScheme="teal"
								size="xs"
								isDisabled={quantityOfProduct === 5}
								onClick={() => handleQuantity(+1, id)}
							/>
						</HStack>
					</Center>
				</Box>
			</Center>
			<Center>
				<Stack direction="row" spacing={4} align="center" mb={2}>
					<Button colorScheme="teal" variant="solid" size={"sm"}>
						Buy Now
					</Button>

					<Button
						colorScheme="red"
						variant="solid"
						onClick={() => handleDelete(id)}
						size={"sm"}
					>
						Remove
					</Button>
				</Stack>
			</Center>
		</Card>
	);
};
