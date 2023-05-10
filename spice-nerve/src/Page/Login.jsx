import {
	Flex,
	Box,
	FormControl,
	FormLabel,
	Input,
	Stack,
	Button,
	Heading,
	VStack,
	Center,
	InputGroup,
	InputLeftAddon,
	InputRightAddon,
	Text,
} from "@chakra-ui/react";
import axios from "axios";
import { useReducer, useState } from "react";
import { Link as ReactLink } from "react-router-dom";
import swal from "sweetalert";
import { AuthContext } from "../Context/AuthContextProvider";
import { useContext } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const initialState = {
	email: "",
	password: "",
};
const reducer = (state, action) => {
	switch (action.type) {
		case "email": {
			return {
				...state,
				email: action.payload,
			};
		}
		case "password": {
			return {
				...state,
				password: action.payload,
			};
		}

		case "reset": {
			return initialState;
		}
		default: {
			return state;
		}
	}
};
export function Login() {
	const { authentification, login } = useContext(AuthContext);
	const [state, dispatch] = useReducer(reducer, initialState);
	const [user, setUser] = useState([]);
	const navigate = useNavigate();
	useEffect(() => {
		axios.get("https://crabby-culottes-ant.cyclic.app/users").then((res) => {
			setUser(res.data);
		});
	}, []);

	const handleSubmit = () => {
		let flag = false;
		user.forEach((ele) => {
			if (ele.email === state.email && ele.password === state.password) {
				localStorage.setItem("isAuthUse", true);
				localStorage.setItem("name", ele.name);
				flag = true;
			}
		});

		if (flag) {
			login();
			redirectToLoginSuccess();
			return;
		} else {
			swal("Please Check Your credentials!", "", "warning");
		}
	};

	function redirectToLoginSuccess() {
		swal("Logged In", "", "success");
		navigate("/", { replace: true });
		window.location.reload(false);
	}

	return (
		<Flex justify={"center"}>
			<Stack
				spacing={4}
				mx={"auto"}
				maxW={"lg"}
				py={"10%"}
				px={10}
				boxShadow={"sm"}
			>
				<Text>Login Here & Purchase Your Favorite Crocs</Text>
				<Box rounded={"lg"} px={14}>
					<Stack spacing={4}>
						<FormControl id="email">
							<InputGroup>
								<InputLeftAddon children="Email" />
								<Input
									placeholder="Please enter your email ..."
									type="email"
									onChange={(e) =>
										dispatch({ type: "email", payload: e.target.value })
									}
								/>
							</InputGroup>
						</FormControl>
						<FormControl id="password">
							<InputGroup>
								<InputLeftAddon children="Password" />
								<Input
									placeholder="Please enter your pass ..."
									type="password"
									onChange={(e) =>
										dispatch({ type: "password", payload: e.target.value })
									}
								/>
							</InputGroup>
						</FormControl>
						<Center>
							<VStack spacing={4}>
								<Button
									onClick={handleSubmit}
									bg={"blue.400"}
									color={"white"}
									_hover={{
										bg: "blue.500",
									}}
									width={"xs"}
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
