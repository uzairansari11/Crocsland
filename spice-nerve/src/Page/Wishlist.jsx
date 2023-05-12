import React, { useEffect } from "react";
import {
    Box,
    Button,
    Flex,
    Grid,
    Skeleton,
    Stack,
    Text,
} from "@chakra-ui/react";

// import SingleWishlist from "../../Components/Products/SingleWishlist";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, } from "react-router-dom";
import { getCartRequest } from "../Redux/Cart/api";
import { Loading } from "../Component/Loading";
const Wishlist = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    let isLoading = true
    const { isAuth, userID } = useSelector((store) => store.authReducer);
    const { wishList } = useSelector((store) => store.cartReducer);
    useEffect(() => {
        if (userID) {
            dispatch(getCartRequest(userID));
        }
    }, [userID]);
    return (
        <>

            <Box minH={"70vh"} pos={"relative"}>
                <Grid
                    borderBottomWidth={"1px"}
                    templateColumns={{
                        base: "repeat(2,1fr)",
                        md: "repeat(2,1fr)",
                        lg: "repeat(3,1fr)",
                        xl: "repeat(4,1fr)",
                        "1xl": "repeat(5,1fr)",
                    }}
                    p={{ base: "5px", md: "1.5rem" }}
                    minHeight={"80vh"}
                    rowGap={{ base: "0.8rem", md: "2rem" }}
                    justifyItems={"center"}
                >
                    {isLoading ? (
                        <Loading />
                    ) : wishList.length ? (
                        wishList?.map((item) => {
                            // return <SingleWishlist key={item.id} {...item} />;
                        })
                    ) : (
                        <Flex
                            width={"full"}
                            flexDir={"column"}
                            pos={"absolute"}
                            paddingTop={"3rem"}
                            color={"gray.500"}
                            justify={"center"}
                            align={"center"}
                        >
                            <Text textAlign={"center"} fontSize={"1.5rem"}>
                                There are no products in your wishlist
                            </Text>
                            <Button
                                mt={"2rem"}
                                px="2rem"
                                colorScheme="pink"
                                onClick={() => {
                                    navigate("/product/MensData");
                                }}
                            >
                                Browse Products
                            </Button>
                        </Flex>
                    )}
                    { }
                </Grid>
            </Box>

        </>
    );
};

export default Wishlist;
