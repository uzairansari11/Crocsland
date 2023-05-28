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
	GridItem,
	Select,
	useToast,
	Flex,
} from "@chakra-ui/react";
import { MdLocalShipping } from "react-icons/md";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getSingleProduct } from "../Component/utils/getSigleProduct";
import { useDispatch, useSelector } from "react-redux";
import {
	addCartRequest,
	getCartRequest,
	getWishlistRequest,
} from "../Redux/Cart/api";
import { Tooltip } from "@chakra-ui/react";
import { Loading } from "../Component/Loading";
import { addWishlistRequest } from "../Redux/Cart/api";

export default function ProductDetails() {
	const param = useParams();
	const [data, setData] = useState([]);
	const [size, setSize] = useState(null);
	const [isLoading, setIsLoading] = useState(true); // 
	const toast = useToast();
	const dispatch = useDispatch();
	const { isAuth, userID } = useSelector((store) => store.authReducer);
	const { cart, wishlist } = useSelector((store) => store.cartReducer);

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


		const alreadyAdded = collection.filter((product) => {
			return product.productID === data.id && product.size === size;
		});

		if (alreadyAdded.length >= 1) {
			toast({
				title: `Product Already Added In ${successMessage} `,
				variant: "subtle",
				status: "error",
				position: "top",
				duration: 1000,
				isClosable: true,
			});
			return;
		}

		toast({
			title: `We Are Adding Your Product`,
			status: "warning",
			isClosable: true,
			position: "top",
			duration: 1000,
		});
		const productDetail = {
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

	const handleWishlistData = (size, data) => {
		const alreadyAddedToCart = cart.filter(
			(product) => product.productID === data.id && product.size === size
		);
		if (alreadyAddedToCart.length>0) {
			toast({
				title: "Existing Cart Product Can't Be Added To Wishlist",
				variant: "subtle",
				status: "error",
				position: "top",
				duration: 1000,
				isClosable: true,
			});
			return;
		}
	
		handleData(size, data, wishlist, addWishlistRequest, "Wishlist");
	};
	

	useEffect(() => {
		window.scrollTo(0, 0);
		setIsLoading(true); // Set isLoading to true when fetching data
		getSingleProduct(param.id).then((res) => {
			setData(res);
			setIsLoading(false); // Set isLoading to false once data is loaded
		});
		if (userID) {
			dispatch(getCartRequest(userID));
			dispatch(getWishlistRequest(userID));
		}
	}, [param.id]);

	if (isLoading) {
		return <Loading />;
	}
	return (
		<Container maxW={"full"} py={4}>
			<SimpleGrid columns={{ base: 1, lg: 2 }}>
				<GridItem>
					<Box
						display={"flex"}
						justifyContent={"center"}
						alignItems={"center"}
						width={"80%"}
						margin={"auto"}
					>
						<Image
							alt={data.image}
							src={data.image}
							fit={"cover"}
							align={"center"}
							w={"80%"}
						/>
					</Box>
				</GridItem>
				<Stack>
					<Box>
						<Heading
							fontWeight={600}
							fontSize={{ base: "xl", sm: "xl", lg: "xl" }}
							color={"red"}
						>
							{data.title}
						</Heading>
						<Box
							display={"flex"}
							justifyContent={"space-around"}
							mt={4}
							flexDirection={{ base: "column", md: "row" }}
						>
							<Text
								fontSize={{ base: "16px", lg: "18px" }}
								color="black.500"
								fontWeight={"400"}
							>
								Offer Price : ₹ {data.offerPrice}
							</Text>
							<Text
								fontSize={{ base: "16px", lg: "18px" }}
								color="black.500"
								fontWeight={"400"}
								textDecoration={"line-through"}
							>
								Original Price : ₹ {data.originalPrice}
							</Text>
							<Text
								fontSize={{ base: "16px", lg: "18px" }}
								color="black.500"
								fontWeight={"400"}
							>
								Discount : {data.discount}%
							</Text>
						</Box>
					</Box>

					<Stack direction={"column"}>
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
								align={"left"}
							>
								{data.description}
							</Text>
						</Box>
					</Stack>
					<Center>
						<Flex gap={4}>
							<Tooltip label="ADD TO BAG" placement="left-start">
								<Button
									size="sm"
									colorScheme="blue"
									height={10}
									width={20}
									onClick={() => handleCartData(size, data)}
								>
									<img
										width="24"
										height="24"
										src="https://img.icons8.com/android/24/shopping-bag.png"
										alt="shopping-bag"
									/>
								</Button>
							</Tooltip>
							<Tooltip label="ADD TO WISHLIST" placement="right-start">
								<Button
									height={10}
									width={20}
									colorScheme="pink"
									onClick={() => handleWishlistData(size, data)}
								>
									<img
										width="24"
										height="24"
										src="https://img.icons8.com/ios-filled/24/like--v1.png"
										alt="like--v1"
									/>
								</Button>
							</Tooltip>
						</Flex>
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
