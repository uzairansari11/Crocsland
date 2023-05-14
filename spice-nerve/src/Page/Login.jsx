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
import { Link as ReactLink, json, useNavigate } from "react-router-dom";
import { authSuccess, gettingUsersData } from "../Redux/Authentication/action";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { tokenGenrator } from "../Component/utils/tokenGenrator";
import { Loading } from "../Component/Loading";
import { Error } from "../Component/Error";
export function Login() {
	const dispatch = useDispatch();
	const authData = useSelector((store) => store.authReducer);
	const { users } = authData;
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const toast = useToast();
	const navigate = useNavigate();
	const [isLoading, setIsLoading] = useState(true);

	const handleLogin = (users) => {
		setIsLoading(true);
		const authentication = users.filter((user) => {
			return user.userEmail === email && user.password === password;
		});

		if (authentication.length === 1) {
			setTimeout(() => {
				toast({
					title: "Login Successful",
					description: "Welcom to Crocs Land",
					status: "success",
					duration: 2000,
					isClosable: true,
					position: "top",
				});
				navigate("/", { replace: true });
			}, 1000);
			let userID = authentication[0]["id"];
			let token = tokenGenrator();
			let name = authentication[0]["username"];
			let userDetials = { userID, token, name };
			localStorage.setItem("userResponse", JSON.stringify(userDetials));
			dispatch(authSuccess(userDetials));
			setTimeout(() => {
				setIsLoading(false);
			}, 1000);
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
		setTimeout(() => {
			setIsLoading(false);
		}, 500);
	}, []);
	return isLoading ? (
		<Loading />
	) : (
		<Flex justify="center">
			<Stack spacing={4} mx="auto" maxW="lg" py="10%" px={10} boxShadow="sm">
				<Text>Login Here & Purchase Your Favorite Crocs</Text>
				<Box rounded="lg" px={14}>
					<Stack spacing={4}>
						<FormControl id="email">
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
						<FormControl id="password">
							<InputGroup>
								<InputLeftAddon children="Password" />
								<Input
									placeholder="Please enter your pass ..."
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
									isDisabled={email === "" || password === ""}
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
			</Stack>
		</Flex>
	);
}
