import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as ReactLink, useNavigate } from "react-router-dom";
import {
	Flex,
	Box,
	FormControl,
	Input,
	Stack,
	Button,
	VStack,
	Center,
	InputGroup,
	InputLeftAddon,
	Text,
	useToast,
} from "@chakra-ui/react";
import { authSuccess, gettingUsersData } from "../Redux/Authentication/action";
import { tokenGenrator } from "../Component/utils/tokenGenrator";
import { FaSignInAlt } from "react-icons/fa";

import banner1 from "../files/banner-1.avif";
export function Login() {
	const dispatch = useDispatch();
	const authData = useSelector((store) => store.authReducer);
	const { users } = authData;
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const toast = useToast();
	const navigate = useNavigate();
	const [isLoading, setIsLoading] = useState(false);

	const handleLogin = () => {
		setIsLoading(true);
		const authentication = users.filter(
			(user) => user.userEmail === email && user.password === password
		);
	
		if (authentication.length === 1) {
			const handleSuccessfulLogin = () => {
				toast({
					title: "Login Successful",
					description: `Welcome back ${authentication[0]["username"].toUpperCase()}`,
					status: "success",
					duration: 2000,
					isClosable: true,
					position: "top",
				});
				navigate("/", { replace: true });
				const { id, username } = authentication[0];
				const token = tokenGenrator();
				const userDetials = { userID: id, token, name: username };
				localStorage.setItem("userResponse", JSON.stringify(userDetials));
				dispatch(authSuccess(userDetials));
				setIsLoading(false);
			};
	
			setTimeout(handleSuccessfulLogin, 1000);
		} else {
			setTimeout(() => {
				toast({
					title: "Login Unsuccessful",
					description: "Invalid Credentials",
					status: "error",
					duration: 3000,
					isClosable: true,
					position: "top",
				});
				setIsLoading(false);
			}, 500);
		}
	};
	

	useEffect(() => {
		window.scrollTo(0, 0);
		dispatch(gettingUsersData());
	}, [dispatch]);

	return (
		<Flex
			backgroundImage={`url(${banner1})`}
			backgroundSize="cover"
			backgroundPosition="center"
			minHeight="100vh"
			alignItems="center"
			justifyContent="center"
		>
			<Box
				w="400px"
				p={8}
				boxShadow="md"
				bg="rgba(255, 255, 255, 0.8)"
				rounded="md"
			>
				<Text fontSize="xl" fontWeight="bold" mb={4} textAlign="center">
					Login Here & Purchase Your Favorite Crocs
				</Text>
				<Stack spacing={4}>
					<FormControl id="email">
						<InputGroup>
							<InputLeftAddon children="Email" />
							<Input
								placeholder="Please enter your email..."
								type="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</InputGroup>
					</FormControl>
					<FormControl id="password">
						<InputGroup>
							<InputLeftAddon children="Password" />
							<Input
								placeholder="Please enter your password..."
								type="password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
						</InputGroup>
					</FormControl>
					<Center>
						<VStack spacing={4}>
							<Button
								bg="blue.400"
								color="white"
								_hover={{
									bg: "blue.500",
								}}
								width="xs"
								onClick={() => handleLogin(users)}
								// isDisabled={email === "" || password === ""}
								isLoading={isLoading}
								loadingText="Logging In"
								leftIcon={<FaSignInAlt />}
							>
								Login
							</Button>

							<ReactLink to="/register">
								<Text>
									New User ? <span style={{ color: "red" }}>Signup</span>
								</Text>
							</ReactLink>
						</VStack>
					</Center>
				</Stack>
			</Box>
		</Flex>
	);
}
