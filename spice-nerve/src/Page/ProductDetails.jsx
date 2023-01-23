import {
    Box,
    Container,
    Stack,
    Text,
    Image,
    Center,
    Button,
    Heading,
    SimpleGrid,
    StackDivider,
    GridItem,
    Select,
} from "@chakra-ui/react";

import { MdLocalShipping } from "react-icons/md";
import { useParams } from "react-router-dom";
import { useState, useEffect,useContext } from "react";
import axios from "axios";
import { Loading } from "../Component/Loading";
import { Error } from "../Component/Error";
import swal from "sweetalert";
import { cartQuantityContext } from "../Context/CartQunatityContext";


export default function ProductDetails () {
    const [data, setData] = useState([]);
        const { totalItem, item } = useContext(cartQuantityContext);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [size, setSize] = useState(null);
    const [allCartData, setAllCartData] = useState({});
    const param = useParams();
    const getDataFromApi = (data) => {
        setLoading(true);
        axios
            .get(`http://localhost:8080/products/${data}`)
            .then((res) => {
                setData(res.data);

       setLoading(false);
   })
            .catch((err) => {
                setLoading(false);
                setError(true);
            });
    };
    useEffect(() => {
        getDataFromApi(param.id);
    }, []);
    const postDataToCart = (data) => {
        axios.post('http://localhost:8080/cart', {

            image: data.image,
            size: data.size,
            title:data.title,
            price: data.price,
            quantity:1
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
}
    const handleCartData = (data, size) => {
     setSize(size);
     if (size) {

         postDataToCart({ ...data, size: size })
         swal({
             title: "Product Is Added",

             icon: "success",
             button: "OK",
         });
 totalItem(+1);
  } else {
      swal("Please Add Size");
  }
 };

    return loading ? (
        <Loading />
    ) : error ? (
        <Error />
    ) : (
             <Container maxW={"full"} bgGradient="linear(to-l,#A0AEC0, #E2E8F0)">
                 <SimpleGrid
                     columns={{ base: 1, lg: 2 }}
                     spacing={{ base: 8, md: 10 }}
                     py={{ base: 18, md: 24 }}
                 >
                     <GridItem>
                         <Box p={2} rounded={"2xl"} size={"xl"}>
                             <Image
                                 rounded={"md"}
                                 alt={data.image}
                                 src={data.image}
                                 fit={"cover"}
                                 align={"center"}
                                 w={"100%"}
                                 h={{ base: "100%", sm: "400px", lg: "500px" }}
                             />
                         </Box>
                     </GridItem>
                     <Stack spacing={{ base: 6, md: 10 }}>
                         <Box as={"header"}>
                             <Heading
                                 lineHeight={1.1}
                                 fontWeight={600}
                                 fontSize={{ base: "xl", sm: "2xl", lg: "3xl" }}
                             >
                                 {data.title}
                             </Heading>
                             <Text color="black" fontWeight={400} fontSize={"2xl"} mt={"2"}>
                                 Price:${data.price} USD
                             </Text>
                         </Box>

                         <Stack
                             spacing={{ base: 4, sm: 6 }}
                             direction={"column"}
                             divider={<StackDivider borderColor="black" />}
                         >
                             <Center>
                                 <Box>
                                     <Select
                                         placeholder="Select Your Size"
                                         onChange={(e) => setSize(e.target.value)}
                                     >
                                         <option value="4">Your Size Is :4</option>
                                         <option value="5">Your Size Is :5</option>
                                         <option value="6">Your Size Is :6</option>
                                         <option value="7">Your Size Is :7</option>
                                         <option value="8">Your Size Is :8</option>
                                         <option value="9">Your Size Is :9</option>
                                     </Select>
                                 </Box>
                             </Center>

                             <Box>
                                 <Text
                                     fontSize={{ base: "16px", lg: "18px" }}
                                     color="black.500"
                                     fontWeight={"500"}
                                     textTransform={"uppercase"}
                                     mb={"4"}
                                 >
                                     Product Details
                                 </Text>
                                 <Text
                                     fontSize={{ base: "10px", lg: "14px" }}
                                     color="black.500"
                                     fontWeight={"500"}
                                     textTransform={"uppercase"}
                                     mb={"4"}
                                     align={"left"}
                                 >
                                     {data.description}
                                 </Text>
                             </Box>
                         </Stack>
                         <Center>
                             <Button
                                 size="md"
                                 height="48px"
                                 width="200px"
                                 border="2px"
                                 alignItems={"center"}
                                 borderColor="#7928CA"
                                 m={2}
                                 _hover={{
                                     bg: "#ff6262",
                                     color: "white",
                                     transform: "translateY(2px)",
                                     boxShadow: "lg",
                                 }}
                                    onClick={
                                        () => handleCartData(data, size)


                                    }

                             >
                                 Add to Cart
                             </Button>
                         </Center>

                 <Stack direction="row" alignItems="center" justifyContent={"center"}>
                     <MdLocalShipping />
                     <Text>2-3 business days delivery</Text>
                 </Stack>
             </Stack>
         </SimpleGrid>
     </Container>
 );
}
