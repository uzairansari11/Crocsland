import React from "react";
import {
 Slider,
 SliderTrack,
 SliderFilledTrack,
 SliderThumb,
 HStack,
 Box,
 Card,
 Text,
 Heading,
 Image,
 Stack,
 CardBody,
 Center,
 Button,
} from "@chakra-ui/react";
import axios from "axios";
import { useState, useContext } from "react";
import { cartQuantityContext } from "../Context/CartQunatityContext";
export const AddToCartCard = ({
 image,
 title,
 price,
 size,
 id,
 cartDataFromApi,
}) => {
 const [itemQuantity, setItemQuantity] = useState(1);
 const { totalItem, item } = useContext(cartQuantityContext);
 const deleteDataFromApi = (data) => {
  axios.delete(`http://localhost:8080/cart/${data}`);
  cartDataFromApi();
 };
 const handleDelete = (data) => {
  console.log(data);
  deleteDataFromApi(data);
  totalItem(-1);
 };

 return (
  <Card maxW="sm">
   <CardBody bgGradient="linear(to-l, #E2E8F0)">
    <Image src={image} alt={title} borderRadius="lg" />
    <Stack spacing="3">
     <Heading size="sm">{title}</Heading>
     <Center>
      <HStack>
       <Text color="black" fontSize="sm">
        Size: {size}
       </Text>
       <Text color="black" fontSize="sm">
        Price: ${Math.round(price * itemQuantity)}
       </Text>
       <Text color="black" fontSize="sm">
        Qty: {itemQuantity} No.
       </Text>
      </HStack>
     </Center>
    </Stack>
   </CardBody>
   <Center>
    <Box w={"40"}>
     <Slider
      aria-label="slider-ex-4"
      min={1}
      defaultValue={1}
      max={5}
      onChange={(val) => setItemQuantity(val)}
     >
      <SliderTrack bg="red.100">
       <SliderFilledTrack bg="tomato" />
      </SliderTrack>
      <SliderThumb boxSize={3}>
       <Box color="tomato" />
      </SliderThumb>
     </Slider>
    </Box>
   </Center>
   <Center>
    <Stack direction="row" spacing={4} align="center" mb={2}>
     <Button colorScheme="teal" variant="solid" size={"sm"}>
      Buy Now
     </Button>

     <Button
      colorScheme="red"
      variant="solid"
      onClick={() => handleDelete(id)}
      size={"sm"}
     >
      Remove
     </Button>
    </Stack>
   </Center>
  </Card>
 );
};
