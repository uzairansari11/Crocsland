import { useReducer } from "react";
import axios from "axios";

import {
	Flex,
	Box,
	FormControl,
	FormLabel,
	Input,
	InputGroup,
	InputRightElement,
	InputLeftAddon,
	InputRightAddon,
	Stack,
	Button,
	Heading,
	Text,
	useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Link as ReactLink } from "react-router-dom";
import { useEffect } from "react";
import swal from "sweetalert";
const initialState = {
	name: "",
	email: "",
	password: "",
};
const reducer = (state, action) => {
	switch (action.type) {
		case "name": {
			return {
				...state,
				name: action.payload,
			};
		}
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
export default function Register() {
	const [showPassword, setShowPassword] = useState(false);
	const [state, dispatch] = useReducer(reducer, initialState);
	const [user, setUser] = useState([]);
	useEffect(() => {
		axios.get("https://crabby-culottes-ant.cyclic.app/users").then((res) => {
			setUser(res.data);
		});
	}, []);
	const handleSubmit = (e) => {
		user.forEach((ele) => {
			if (ele.email === state.email) {
				swal("User Already Exists");
				return;
			} else {
				postDataFormToken(state);
			}
		});
	};

	const postDataFormToken = (data) => {
		if (data.name === "" || data.email === "" || data.password === "") {
			swal("Please fill all detials");
			return;
		}

		axios
			.post("https://crabby-culottes-ant.cyclic.app/users", {
				name: data.name,
				email: data.email,
				password: data.password,
			})
			.then(function (response) {

				swal("Congrats!", "Your account is created", "success");
			})
			.catch(function (error) {
		
			});
	};
	return (
		<Flex height={"100vh"} alignItems={"center"} justify={"center"}>
			<Stack>
				<Text>Please Register And Get Exciting Offers!</Text>
				<Box>
					<Stack>
						<FormControl id="firstName" isRequired>
							<InputGroup>
								<InputLeftAddon children="Name" />
								<Input
									placeholder="Please enter a name"
									type="text"
									required
									onChange={(e) =>
										dispatch({ type: "name", payload: e.target.value })
									}
								/>
							</InputGroup>
						</FormControl>

						<FormControl id="email" isRequired>
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
						<FormControl id="password" isRequired>
							<InputGroup>
								<InputLeftAddon children="Password" />
								<Input
									placeholder="Password"
									type={showPassword ? "text" : "password"}
									required
									onChange={(e) =>
										dispatch({ type: "password", payload: e.target.value })
									}
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
								onClick={handleSubmit}
								bg={"blue.400"}
								color={"white"}
								_hover={{
									bg: "blue.500",
								}}
								width={"xs"}
								m={'auto'}
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
