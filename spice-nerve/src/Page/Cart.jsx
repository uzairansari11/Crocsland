import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AddToCartCard } from "../Component/AddToCartCard";
import {
	Stack,
	Box,
	Grid,
	useToast,
	Flex,
	Text,
	Button,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import {
	deleteCartApi,
	getCartRequest,
	updateCartApi,
} from "../Redux/Cart/api";
import PaymentForm from "./PaymentForm";

export const Cart = () => {
	const dispatch = useDispatch();
	const { isAuth, userID } = useSelector((store) => store.authReducer);
	const { cart } = useSelector((store) => store.cartReducer);
	const toast = useToast();
	const navigate = useNavigate();

	const [totalAmount, setTotalAmount] = useState(0);

	const deleteHandler = (productID, size) => {
		let newCart = cart.filter(
			(product) => product.id !== productID && product.size !== size
		);
		dispatch(deleteCartApi(userID, newCart));
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

	const handleUpdateQuantity = (value, productID, size) => {
		let newCart = cart.map((product) =>
			product.productID === productID && product.size === size
				? { ...product, quantity: product.quantity + value }
				: product
		);
		dispatch(updateCartApi(userID, newCart));
	};

	useEffect(() => {
		if (userID) {
			dispatch(getCartRequest(userID));
		}
	}, [userID]);

	useEffect(() => {
		calculateTotalAmount();
	}, [cart]);

	const calculateTotalAmount = () => {
		let total = 0;
		cart.forEach((product) => {
			total += product.price * product.quantity;
		});
		setTotalAmount(total);
	};

	const handlePaymentSuccess = () => {
		// Perform payment success logic here
		// For example, clear the cart, show success message, navigate to the next page, etc.
		dispatch(deleteCartApi(userID, []));
		toast({
			title: "Payment Successful",
			description: "Thank you for your purchase!",
			variant: "subtle",
			status: "success",
			position: "top",
			duration: 3000,
			isClosable: true,
		});
		navigate("/success"); // Replace "/success" with the desired success page URL
	};

	return (
		<Stack
			direction={{ base: "column", md: "row" }}
			spacing={4}
			p={4}
			alignItems="flex-start"
			justifyContent="space-around"
		>
			<Box flex={{ base: "none", md: "1" }}>
				<Grid gap={2}>
					{cart.length ? (
						cart.map((ele) => (
							<AddToCartCard
								key={ele.productID + ele.size}
								{...ele}
								deleteHandler={deleteHandler}
								handleUpdateQuantity={handleUpdateQuantity}
							/>
						))
					) : (
            <Flex
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              p={4}
              textAlign="center"
            >
              <Text fontSize="1.5rem">There are no products in your bag</Text>
              <Button
                mt={4}
                px={8}
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
      <Box flex={{ base: "none", md: "1" }}>
        <PaymentForm />
      </Box>
    </Stack>
  );
};
