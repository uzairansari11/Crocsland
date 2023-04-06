import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  HStack,
  Center,
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
  const navigate = useNavigate()

  const [user, setUser] = useState([]);
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
        flag = true
      }
    });

    if (flag) {
      login();
      redirectToLoginSuccess()
      return
    } else {
      swal("Please Check Your credentials!", "", "warning");
    }
  };


  function redirectToLoginSuccess() {
    swal("Logged In", "", "success");
    navigate("/", { replace: true })
    window.location.reload(false)
  }




  return (
    <Flex minH={"100vh"} align={"center"} justify={"center"}>
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Sign in to your account</Heading>
        </Stack>
        <Box rounded={"lg"} boxShadow={"lg"} p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                onChange={(e) => dispatch({ type: "email", payload: e.target.value })}
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                onChange={(e) =>
                  dispatch({ type: "password", payload: e.target.value })
                }
              />
            </FormControl>
            <Center>
              <HStack spacing={10}>
                <Button
                  onClick={handleSubmit}
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                >
                  Login
                </Button>
                <ReactLink to="/register">
                  <Button
                    bg={"red.400"}
                    color={"white"}
                    _hover={{
                      bg: "blue.500",
                    }}
                  >
                    Register
                  </Button>
                </ReactLink>
              </HStack>
            </Center>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
