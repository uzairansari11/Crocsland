import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AddToCartCard } from "../Component/AddToCartCard";
import {
  Stack,
  Box,
  Grid,
  useToast,
  Flex,
  Text,
  Button,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCartApi,
  getCartRequest,
  updateCartApi,
} from "../Redux/Cart/api";
import PaymentForm from "./PaymentForm";

export const Cart = () => {
  const dispatch = useDispatch();
  const { userID, isAuth } = useSelector((store) => store.authReducer);
  const { cart } = useSelector((store) => store.cartReducer);
  const toast = useToast();
  const navigate = useNavigate();
  const [totalAmount, setTotalAmount] = useState(0);

  const deleteHandler = (productID, size) => {
    let newCart = cart.filter(
      (product) => product.id !== productID && product.size !== size
    );
    dispatch(deleteCartApi(userID, newCart));
    toast({
      title: "Deleted Successfully",
      description: "Product deleted from cart",
      variant: "subtle",
      status: "success",
      position: "top",
      duration: 1000,
      isClosable: true,
    });
  };

  const handleUpdateQuantity = (value, productID, size) => {
    let newCart = cart.map((product) =>
      product.productID === productID && product.size === size
        ? { ...product, quantity: product.quantity + value }
        : product
    );
    dispatch(updateCartApi(userID, newCart));
  };

  useEffect(() => {
    if (userID) {
      dispatch(getCartRequest(userID));
    }
  }, [userID, dispatch, isAuth]);

  useEffect(() => {
    const calculateTotalAmount = () => {
      let total = 0;
      cart.forEach((product) => {
        total += Number(product.offerPrice) * Number(product.quantity);
      });
      setTotalAmount(total);
    };

    calculateTotalAmount();
  }, [cart]);

  return (
    <Stack
      direction={{ base: "column", md: "row" }}
      justifyContent="center"
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
    >
      <Box flex={{ base: "none", md: ".7" }}>
        <Grid gap={2}>
          {cart.length && isAuth ? (
            cart.map((ele) => (
              <AddToCartCard
                key={ele.productID + ele.size}
                {...ele}
                deleteHandler={deleteHandler}
                handleUpdateQuantity={handleUpdateQuantity}
              />
            ))
          ) : (
            <Flex
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              p={4}
              textAlign="center"
            >
              <Text fontSize="1.5rem">There are no products in your bag</Text>
              <Button
                mt={4}
                px={8}
                colorScheme="pink"
                onClick={() => {
                  navigate("/women");
                }}
              >
                Browse Products
              </Button>
            </Flex>
          )}
        </Grid>
      </Box>
      <Box flex={{ base: "none", md: ".5" }}>
        {<PaymentForm totalAmount={totalAmount} isAuth={isAuth} />}
      </Box>
    </Stack>
  );
};
