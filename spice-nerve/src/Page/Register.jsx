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
import banner6 from "../files/banner-6.PNG";
import { BiUserPlus } from "react-icons/bi";

export default function Register() {
  const toast = useToast();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const authData = useSelector((store) => store.authReducer);
  const { users } = authData;
  const [isRegistering, setIsRegistering] = useState(false);

  const handleRegistration = () => {
    setIsRegistering(true);
    const isUserPresent = users?.filter(
      (elements) => elements.userEmail === email
    );
    if (isUserPresent.length > 0) {
      toast({
        title: "Email Already Exists",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
      setIsRegistering(false);

      return;
    }

    if (email && password && name) {
      const userDetails = {
        username: name,
        userEmail: email,
        password: password,
        wishlist: [],
        order: [],
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
          setIsRegistering(false);
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
          setIsRegistering(false);
        });
    } else {
      toast({
        title: "Please Provide All The Details",
        status: "warning",
        duration: 500,
        isClosable: true,
        position: "top",
      });
      setTimeout(() => {
        setIsRegistering(false);
      }, 500);
    }
  };

  useEffect(() => {
    dispatch(gettingUsersData());
  }, [dispatch]);

  return (
    <Flex
      height="100vh"
      alignItems="center"
      justifyContent="center"
      backgroundImage={`url(${banner6})`}
      backgroundSize="cover"
      backgroundPosition="center"
    >
      <Box
        w="400px"
        p={8}
        boxShadow="md"
        bg="rgba(255, 255, 255, 0.8)"
        rounded="md"
      >
        <Stack spacing={4}>
          <Text textAlign="center">
            Please Register And Get Exciting Offers!
          </Text>
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
                  isLoading={isRegistering}
                  loadingText="Signing Up"
                  leftIcon={<BiUserPlus />}
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
      </Box>
    </Flex>
  );
}
