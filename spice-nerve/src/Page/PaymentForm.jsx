// import {
// 	Button,
// 	Divider,
// 	FormControl,
// 	FormLabel,
// 	HStack,
// 	Image,
// 	Input,
// 	PinInput,
// 	PinInputField,
// 	Text,
// 	VStack,
// } from "@chakra-ui/react";
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const PaymentForm = () => {
// 	const [f_name, setF_name] = useState("");
// 	const [l_name, setL_name] = useState("");
// 	const [address, setAddress] = useState("");
// 	const [city, setCity] = useState("");
// 	const [state, setState] = useState("");
// 	const [card, setCard] = useState("");
// 	const [exp_m, setExp_m] = useState("");
// 	const [exp_y, setExp_y] = useState("");
// 	const navigate = useNavigate();
// 	const PaymentDone = () => {
// 		if (
// 			f_name === "" ||
// 			l_name === "" ||
// 			address === "" ||
// 			city === "" ||
// 			state === "" ||
// 			card === "" ||
// 			exp_m === "" ||
// 			exp_y === ""
// 		) {
// 			alert("Fill Credentials");
// 		} else {
// 			alert("Payment Successful");
// 			navigate("/successful");
// 		}
// 	};

// 	return (
// 		<>
// 			<VStack
// 				spacing={5}
// 				width="1200px"
// 				border="0px solid green"
// 				margin="auto"
// 				style={{ marginTop: "30px" }}
// 				marginBottom="50px"
// 			>
// 				<Text fontWeight="bold" fontSize="xl">
// 					Choose Your Payment Method
// 				</Text>

// 				<HStack spacing={5}>
// 					<VStack
// 						marginTop="-240px"
// 						width={300}
// 						align="flex-start"
// 						padding={5}
// 						bg="#eeeeee"
// 					>
// 						<HStack>
// 							<Image
// 								w={25}
// 								src="https://images.bewakoof.com/web/bank-card-fill-1645697857.svg"
// 							/>
// 							<Text>Debit/Credit Card</Text>
// 						</HStack>

// 						<Divider />

// 						<HStack>
// 							<Image
// 								w={25}
// 								src="https://images.bewakoof.com/web/Group-1645705428.png"
// 							/>
// 							<Text>WALLET</Text>
// 						</HStack>

// 						<Divider />
// 						<HStack>
// 							<Image
// 								w={25}
// 								src="https://images.bewakoof.com/web/upi-icon-1645705429.png"
// 							/>
// 							<Text>UPI</Text>
// 						</HStack>

// 						<Divider />
// 						<HStack>
// 							<Image
// 								w={25}
// 								src="https://images.bewakoof.com/web/nb-icon-1645705428.png"
// 							/>
// 							<Text>NET BANKING</Text>
// 						</HStack>

// 						<Divider />
// 						<HStack>
// 							<Image
// 								w={25}
// 								src="https://images.bewakoof.com/web/cod-icon-1645705427.png"
// 							/>
// 							<Text>CASH ON DELIVERY</Text>
// 						</HStack>

// 						<Divider />
// 					</VStack>

// 					<VStack align="flex-start" spacing={5} padding={5}>
// 						<VStack>
// 							<HStack>
// 								<FormControl>
// 									<FormLabel>First Name</FormLabel>
// 									<Input
// 										size="sm"
// 										value={f_name}
// 										onChange={(e) => setF_name(e.target.value)}
// 									/>
// 								</FormControl>
// 								<FormControl>
// 									<FormLabel>Last Name</FormLabel>
// 									<Input
// 										size="sm"
// 										value={l_name}
// 										onChange={(e) => setL_name(e.target.value)}
// 									/>
// 								</FormControl>
// 							</HStack>

// 							<FormControl>
// 								<FormLabel>Address</FormLabel>
// 								<Input
// 									size="sm"
// 									value={address}
// 									onChange={(e) => setAddress(e.target.value)}
// 								/>
// 							</FormControl>

// 							<HStack>
// 								<FormControl>
// 									<FormLabel>City</FormLabel>
// 									<Input
// 										size="sm"
// 										value={city}
// 										onChange={(e) => setCity(e.target.value)}
// 									/>
// 								</FormControl>
// 								<FormControl>
// 									<FormLabel>State</FormLabel>
// 									<Input
// 										type="city"
// 										size="sm"
// 										value={state}
// 										onChange={(e) => setState(e.target.value)}
// 									/>
// 								</FormControl>
// 							</HStack>
// 						</VStack>

// 						<Divider />

// 						<VStack>
// 							<HStack width="full">
// 								<FormControl>
// 									<FormLabel>Card Number</FormLabel>
// 									<Input
// 										w={280}
// 										size="sm"
// 										value={card}
// 										onChange={(e) => setCard(e.target.value)}
// 									/>
// 								</FormControl>

// 								<FormControl>
// 									<FormLabel>CVV</FormLabel>
// 									<HStack width="full">
// 										<PinInput size="sm">
// 											<PinInputField />
// 											<PinInputField />
// 											<PinInputField />
// 										</PinInput>
// 									</HStack>
// 								</FormControl>
// 							</HStack>

// 							<HStack>
// 								<FormControl>
// 									<FormLabel>Exp Month</FormLabel>
// 									<Input
// 										size="sm"
// 										value={exp_m}
// 										onChange={(e) => setExp_m(e.target.value)}
// 									/>
// 								</FormControl>
// 								<FormControl>
// 									<FormLabel>Exp Year</FormLabel>
// 									<Input
// 										size="sm"
// 										value={exp_y}
// 										onChange={(e) => setExp_y(e.target.value)}
// 									/>
// 								</FormControl>
// 							</HStack>

// 							<Button
// 								style={{ marginTop: "20px" }}
// 								onClick={PaymentDone}
// 								fontSize="x"
// 								padding={3}
// 								w="full"
// 								colorScheme="yellow"
// 							>
// 								PAY ₹ {"totalAmountFromApi"}
// 							</Button>
// 						</VStack>
// 					</VStack>
// 				</HStack>
// 			</VStack>
// 		</>
// 	);
// };
// export default PaymentForm;
import React, { useState } from "react";
import {
	Box,
	Container,
	Stack,
	FormControl,
	FormLabel,
	Input,
	InputGroup,
	InputLeftElement,
	Button,
	Text,
	Alert,
	AlertIcon,
} from "@chakra-ui/react";
import { FaCreditCard, FaCalendar, FaLock } from "react-icons/fa";

const PaymentFrom = () => {
	const [cardNumber, setCardNumber] = useState("");
	const [expirationDate, setExpirationDate] = useState("");
	const [cvv, setCvv] = useState("");
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [paymentError, setPaymentError] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();

		// Perform payment processing here
		// Simulating payment processing with a timeout
		setIsSubmitting(true);
		setPaymentError(false);

		setTimeout(() => {
			setIsSubmitting(false);
			setPaymentError(true);
		}, 2000);
	};

	return (
		<Container maxW="sm" py={8}>
			<Box
				bg="white"
				boxShadow="lg"
				p={6}
				rounded="md"
				w="full"
				maxW="400px"
				mx="auto"
			>
				<Stack spacing={4}>
					<Box textAlign="center">
						<Text fontSize="2xl" fontWeight="bold">
							Payment Details
						</Text>
					</Box>
					{paymentError && (
						<Alert status="error">
							<AlertIcon />
							There was an error processing your payment. Please try again.
						</Alert>
					)}
					<form onSubmit={handleSubmit}>
						<FormControl>
							<FormLabel>Card Number</FormLabel>
							<InputGroup>
								<InputLeftElement pointerEvents="none">
									<FaCreditCard color="gray.300" />
								</InputLeftElement>
								<Input
									type="text"
									placeholder="Enter card number"
									value={cardNumber}
									onChange={(e) => setCardNumber(e.target.value)}
									isRequired
								/>
							</InputGroup>
						</FormControl>
						<FormControl>
							<FormLabel>Expiration Date</FormLabel>
							<InputGroup>
								<InputLeftElement pointerEvents="none">
									<FaCalendar color="gray.300" />
								</InputLeftElement>
								<Input
									type="text"
									placeholder="MM/YY"
									value={expirationDate}
									onChange={(e) => setExpirationDate(e.target.value)}
									isRequired
								/>
							</InputGroup>
						</FormControl>
						<FormControl>
							<FormLabel>CVV</FormLabel>
							<InputGroup>
								<InputLeftElement pointerEvents="none">
									<FaLock color="gray.300" />
								</InputLeftElement>
								<Input
									type="text"
									placeholder="CVV"
									value={cvv}
									onChange={(e) => setCvv(e.target.value)}
									isRequired
								/>
							</InputGroup>
						</FormControl>
						<Button
							type="submit"
							colorScheme="blue"
							isLoading={isSubmitting}
							loadingText="Processing"
							spinnerPlacement="end"
							mt={4}
							w="full"
						>
							Submit Payment
						</Button>
					</form>
				</Stack>
			</Box>
		</Container>
	);
};

export default PaymentFrom
