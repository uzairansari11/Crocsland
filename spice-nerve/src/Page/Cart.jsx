import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AddToCartCard } from "../Component/AddToCartCard";
import {
 Center,
 Grid,
 Stack,
 Box,
 Button,
 ButtonGroup,
 Divider,
 Flex,
 Badge,
 HStack,
 IconButton,
 Image,
 Spacer,
 Spinner,
 Text,
 VStack,
 Wrap,
} from "@chakra-ui/react";
import { AddIcon, ArrowRightIcon, CloseIcon } from "@chakra-ui/icons";
import { BiShoppingBag } from "react-icons/bi";
import { Loading } from "../Component/Loading";
import { Error } from "../Component/Error";

export const Cart = () => {
 const [data, setData] = useState([]);
 const [loading, setLoading] = useState(false);
 const [error, setError] = useState(false);
 const navigate = useNavigate();

 const cartDataFromApi = () => {
  setLoading(true);
  axios
   .get("http://localhost:8080/cart")
   .then(function (response) {
    // handle success
    console.log("cart page",response.data.length);
    setData(response.data);
    setLoading(false);
   })
   .catch(function (error) {
    // handle error
    console.log(error);
    setLoading(false);
    setError(true);
   });
 };

 useEffect(() => {
  cartDataFromApi();
 }, []);

  const totalPrice = data.reduce((acc, el) => {

return acc+Number(el.price)
},0)
 return loading ? (
  <Loading />
 ) : error ? (
  <Error />
 ) : (
  <Box display={"flex"} mt={"20"} width={"100%"} justifyContent={"center"}>
   <Stack display={"flex"} width={"40%"} gap={6} p={4}>
    {data?.map((ele) => (
     <AddToCartCard key={ele.id} {...ele} cartDataFromApi={cartDataFromApi} />
    ))}
   </Stack>
   <Stack width={"60%"}>
    <VStack marginTop="10px" justify="center" border="0px solid green">
     <Text fontSize="2xl" fontWeight="extrabold">
      My Bag {data.length} item(S)
     </Text>

     <Wrap padding={10} spacing={50}>
      <VStack spacing={5}>
       <HStack spacing={5} w="full" padding={3} bg="#fcffee">
        {" "}
        <Image w={10} />
       </HStack>
       {/* {cart_data.map((el) => (
         <SingleProduct el {...el} />
        ))} */}
       happyyyy
      </VStack>
      <VStack spacing={5}>
       <HStack spacing={5} w="full" padding={3} bg="yellow.300">
        <Text fontWeight="bold">Save extra ₹140 with</Text> <Spacer />{" "}
        <ArrowRightIcon />
       </HStack>
       <Box
        fontSize="16px"
        w={600}
        spacing={3}
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        padding="5"
       >
        Get Rs.200 instant discount on your First Purchase above Rs.999. Coupon
        code -NEW200
       </Box>
       <Box
        fontSize="16px"
        w={600}
        spacing={3}
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        padding="5"
       >
        Whistles! Get extra 20% Cashback on prepaid orders above Rs.499. Coupon
        code - NEW20. Applicable for new customers only!
       </Box>
       <Box
        bg="#ecf6f5"
        fontWeight="bold"
        fontSize="16px"
        w={600}
        spacing={3}
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        padding="10px 20px"
       >
        Have a Coupon / Referral / Gift Card ?
       </Box>
       <Stack
        bg="gray.200"
        w={600}
        spacing={3}
        borderWidth="1px"
        overflow="hidden"
        padding="5"
        textAlign="center"
       >
        <Text fontWeight="bold" fontSize="20px">
         PRICE SUMMARY
        </Text>
       </Stack>
       <VStack
        fontSize="16px"
        padding="5"
        w={600}
        spacing={5}
        borderWidth="1px"
        overflow="hidden"
       >
        <HStack w="full">
         <Text fontSize="18px">Total MRP (Incl. of taxes) </Text>
         <Spacer />
         <Text fontWeight="bold" fontSize="18px">
          $ {totalPrice}/-
         </Text>
        </HStack>

        <HStack w="full">
         <Text fontSize="18px">Shipping Charges </Text>
         <Spacer />
         <Text fontWeight="bold" color="green.500" fontSize="18px">
          FREE
         </Text>
        </HStack>

        <Badge
         borderRadius="2xl"
         fontSize="xl"
         padding="5px 20px"
         w="full"
         variant="subtle"
         color="gray.800"
         colorScheme="green"
        >
         You are saving {"25%"} on this order
        </Badge>
       </VStack>

       <HStack w="full" padding="5">
        <Text w="50%" fontSize="2xl" fontWeight="bold">
         Total $ {totalPrice}
        </Text>

        <Divider w="10%" orientation="vertical" />

        <Button
         onClick={() => navigate("/payment")}
         w="full"
         colorScheme="teal"
         color="white"
         size="lg"
        >
         CheckOut
        </Button>
       </HStack>

       <Divider as="bold" />
       <Divider as="bold" />
       <Divider as="bold" />
      </VStack>
     </Wrap>
    </VStack>
   </Stack>
  </Box>
 );
};
