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
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
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
export default function Register () {
    const [showPassword, setShowPassword] = useState(false);
    const [state, dispatch] = useReducer(reducer, initialState);
    const handleSubmit = () => {
        console.log(state);
        postDataFormToken(state);
    };

    const postDataFormToken = (data) => {
        axios
            .post("http://localhost:8080/users", {
       name: data.name,
       email: data.email,
       password: data.password,
   })
      .then(function (response) {
          console.log(response.headers);
   })
            .catch(function (error) {
                console.log(error);
            });
    };
    return (
        <Flex
            minH={"100vh"}
            align={"center"}
            justify={"center"}
            bg={useColorModeValue("gray.50", "gray.800")}
        >
            <Stack spacing={8} mx={"auto"} maxW={"lg"} py={8} px={6}>
                <Stack align={"center"}>
                    <Heading fontSize={"2xl"} textAlign={"center"}>
                        Please Register Here
                    </Heading>
                </Stack>
                <Box
                    rounded={"lg"}
                    bg={useColorModeValue("white", "gray.700")}
                    boxShadow={"lg"}
                    p={8}
                >
                    <Stack spacing={4}>
                        <FormControl id="firstName" isRequired>
                            <FormLabel>Name</FormLabel>
                            <Input
                                w={"auto"}
                                placeholder="Name"
                                type="text"
                                required
                                onChange={(e) => dispatch({ type: "name", payload: e.target.value })}
                            />
                        </FormControl>

                     <FormControl id="email" isRequired>
                         <FormLabel>Email address</FormLabel>
                         <Input
                             placeholder="Email"
                             type="email"
                             onChange={(e) => dispatch({ type: "email", payload: e.target.value })}
                         />
                     </FormControl>
                     <FormControl id="password" isRequired>
                         <FormLabel>Password</FormLabel>
                         <InputGroup>
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
                                     onClick={() => setShowPassword((showPassword) => !showPassword)}
                                 >
                                     {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                                 </Button>
                             </InputRightElement>
                         </InputGroup>
                     </FormControl>
                     <Stack spacing={10} pt={2}>
                         <Button
                             onClick={handleSubmit}
                             loadingText="Submitting"
                             size="lg"
                             bg={"#8c52ff"}
                             color={"white"}
                             _hover={{
                                 bg: "#ff6262",
                             }}
                         >
                             Sign up
                         </Button>
                     </Stack>
                     <Stack pt={6}>
                         <Text align={"center"}>
                             Already a user? <Link color={"#8c52ff"}>Login</Link>
                         </Text>
                     </Stack>
                 </Stack>
             </Box>
         </Stack>
     </Flex>
 );
}
