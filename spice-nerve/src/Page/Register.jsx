import {
	Flex,
	Box,
	FormControl,
	Input,
	InputGroup,
	InputRightElement,
	InputLeftAddon,
	Stack,
	Button,
	Text,
	useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Link as ReactLink, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	gettingUsersData,
	userRegisterationToApi,
} from "../Redux/Authentication/action";

export default function Register() {
	/* navigation and tost */
	const toast = useToast();
	const navigate = useNavigate();
	const dispatch = useDispatch();
	/* user details input */
	const [showPassword, setShowPassword] = useState(false);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [name, setName] = useState("");

	/* retriving data from redux store  */
	const authData = useSelector((store) => store.authReducer);
	const { users } = authData;
	/* Registering user through API */
	const handleRegistration = () => {
		/* checking if user already present or not! */
		const isUserPresent = users?.filter(
			(elements) => elements.userEmail === email,
		);
		if (isUserPresent.length > 0) {
			toast({
				title: "Email Already Exists",
				status: "error",
				duration: 3000,
				isClosable: true,
				position: "top",
			});

			return;
		}
		/* checking if user providing all details properly then inserting Registering in dataBase */
		if (email && password && name) {
			const userDetails = {
				username: name,
				userEmail: email,
				password: password,
				wishlists: [],
				orders: [],
				cart: [],
			};

			dispatch(userRegisterationToApi(userDetails))
				.then((res) => {
					toast({
						title: "Register Successful Redirecting to Website....",
						status: "success",
						duration: 3000,
						isClosable: true,
						position: "top",
					});
					setTimeout(() => {
						navigate("/login");
					}, 3000);
				})
				.catch((err) => {
					toast({
						title: "Something Went Wrong Successful",
						status: "error",
						duration: 500,
						isClosable: true,
						position: "top",
					});
				});
		}
	};

	/* getting all data of user before register */
	useEffect(() => {
		dispatch(gettingUsersData());
	}, []);

	return (
		<Flex height={"100vh"} alignItems={"center"} justify={"center"}>
			<Stack>
				<Text>Please Register And Get Exciting Offers!</Text>
				<Box>
					<Stack>
						<FormControl id="name" isRequired>
							<InputGroup>
								<InputLeftAddon children="Name" />
								<Input
									placeholder="Please enter a name"
									type="text"
									required
									value={name}
									onChange={(e) => setName(e.target.value)}
								/>
							</InputGroup>
						</FormControl>

						<FormControl id="email" isRequired>
							<InputGroup>
								<InputLeftAddon children="Email" />
								<Input
									placeholder="Please enter your email ..."
									type="email"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								/>
							</InputGroup>
						</FormControl>
						<FormControl id="password" isRequired>
							<InputGroup>
								<InputLeftAddon children="Password" />
								<Input
									placeholder="Password"
									type={showPassword ? "text" : "password"}
									required
									value={password}
									onChange={(e) => setPassword(e.target.value)}
								/>

								<InputRightElement h={"full"}>
									<Button
										variant={"ghost"}
										onClick={() =>
											setShowPassword((showPassword) => !showPassword)
										}
									>
										{showPassword ? <ViewIcon /> : <ViewOffIcon />}
									</Button>
								</InputRightElement>
							</InputGroup>
						</FormControl>
						<Stack>
							<Button
								onClick={handleRegistration}
								bg={"blue.400"}
								color={"white"}
								_hover={{
									bg: "blue.500",
								}}
								width={"xs"}
								m={"auto"}
							>
								Sign up
							</Button>
						</Stack>
						<Stack pt={6}>
							<ReactLink to="/login">
								<Text align={"center"}>
									Already a user ? <span style={{ color: "red" }}>Login</span>
								</Text>
							</ReactLink>
						</Stack>
					</Stack>
				</Box>
			</Stack>
		</Flex>
	);
}
