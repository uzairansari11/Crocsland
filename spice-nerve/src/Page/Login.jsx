import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Button,
    Heading,
    
} from "@chakra-ui/react";
import axios from "axios";
import { useReducer, useState } from "react";
import { Navigate } from "react-router";

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
export function Login () {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [flag, setFlag] = useState(false);
    const [name, setName] = useState(false);

    const [user, setUser] = useState([]);
    const handleSubmit = () => {
        axios.get("http://localhost:8080/users").then((res) => {
            setUser(res.data);
        });
        user.forEach((ele) => {
            if (ele.email === state.email && ele.password === state.password) {
                setFlag(true);
                setName(ele.name);
                return;
            }
        });
    };
    console.log(name);




    return (flag ? <Navigate to="/" /> : <Flex
         minH={"100vh"}
         align={"center"}
         justify={"center"}

     >
         <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
             <Stack align={"center"}>
                 <Heading fontSize={"4xl"}>Sign in to your account</Heading>
             </Stack>
             <Box
                 rounded={"lg"}

                 boxShadow={"lg"}
                 p={8}
             >
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
                     <Stack spacing={10}>
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
                     </Stack>
                 </Stack>
             </Box>
         </Stack>
     </Flex>
 );
}
