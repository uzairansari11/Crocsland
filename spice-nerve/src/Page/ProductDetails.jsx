import {
	Box,
	Container,
	Stack,
	Text,
	Image,
	Center,
	Button,
	Heading,
	SimpleGrid,
	StackDivider,
	GridItem,
	Select,
	Toast,
	useToast,
} from "@chakra-ui/react";

import { MdLocalShipping } from "react-icons/md";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import { getSingleProduct } from "../Component/utils/getSigleProduct";
import { useDispatch, useSelector } from "react-redux";
import { addCartRequest, getCartRequest } from "../Redux/Cart/api";

export default function ProductDetails() {
	const param = useParams();
	const [data, setData] = useState([]);
	const [size, setSize] = useState(null);
	const toast = useToast();
	const dispatch = useDispatch();
	const { isAuth, userID } = useSelector((store) => store.authReducer);
	const { cart } = useSelector((store) => store.cartReducer);
	const handleCartData = (size, data) => {
		const alreadyAdded = cart.filter((product) => {
			return product.productID == data.id && product.size == size;
		});
		if (alreadyAdded.length >= 1) {
			toast({
				title: "Product Alreacy  Added In Cart",
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
	useEffect(() => {
		getSingleProduct(param.id).then((res) => setData(res));
		if (userID) {
			dispatch(getCartRequest(userID));
		}
	}, []);

	return (
		<Container maxW={"full"}>
			<SimpleGrid
				columns={{ base: 1, lg: 2 }}
				spacing={{ base: 8, md: 10 }}
				py={{ base: 4, md: 4 }}
			>
				<GridItem>
					<Box p={2}>
						<Image
							alt={data.image}
							src={data.image}
							fit={"cover"}
							align={"center"}
							w={"100%"}
						/>
					</Box>
				</GridItem>
				<Stack spacing={{ base: 6, md: 4 }}>
					<Box as={"header"}>
						<Heading
							// lineHeight={1.1}
							fontWeight={600}
							fontSize={{ base: "xl", sm: "2xl", lg: "3xl" }}
						>
							{data.title}
						</Heading>

						<Text color="black" fontWeight={400} fontSize={"2xl"} mt={"2"}>
							Price:{data.offerPrice}
						</Text>
					</Box>

					<Stack
						spacing={{ base: 4, sm: 6 }}
						direction={"column"}
						divider={<StackDivider borderColor="black" />}
					>
						<Center>
							<Box>
								<Select
									placeholder="Select Your Size"
									onChange={(e) => setSize(e.target.value)}
								>
									{data?.size?.map((ele, index) => {
										return (
											<option key={+index} value={ele}>
												Avaliable Size : {ele}
											</option>
										);
									})}
								</Select>
							</Box>
						</Center>

						<Box>
							<Text
								fontSize={{ base: "16px", lg: "18px" }}
								color="black.500"
								fontWeight={"500"}
								textTransform={"uppercase"}
								mb={"4"}
							>
								Product Details
							</Text>
							<Text
								fontSize={{ base: "10px", lg: "14px" }}
								color="black.500"
								fontWeight={"500"}
								textTransform={"uppercase"}
								mb={"4"}
								align={"left"}
							>
								{data.description}
							</Text>
						</Box>
					</Stack>
					<Center>
						<Button
							size="md"
							height="48px"
							width="200px"
							border="2px"
							alignItems={"center"}
							borderColor="#7928CA"
							m={2}
							_hover={{
								bg: "#ff6262",
								color: "white",
								transform: "translateY(2px)",
								boxShadow: "lg",
							}}
							onClick={() => handleCartData(size, data)}
						>
							Add to Cart
						</Button>
					</Center>

					<Stack direction="row" alignItems="center" justifyContent={"center"}>
						<MdLocalShipping />
						<Text>2-3 business days delivery</Text>
					</Stack>
				</Stack>
			</SimpleGrid>
		</Container>
	);
}
