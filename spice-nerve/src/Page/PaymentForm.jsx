import React, { useState } from "react";
import {
  Box,
  Container,
  Stack,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Button,
  Text,
  Alert,
  AlertIcon,
  Toast,
} from "@chakra-ui/react";
import { FaCreditCard, FaCalendar, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const PaymentFrom = ({ totalAmount, isAuth }) => {
  const [cardNumber, setCardNumber] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [paymentError, setPaymentError] = useState(false);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    if (cardNumber && expirationDate && cvv && name && address) {
      setIsSubmitting(true);
      setPaymentError(false);
      setTimeout(() => {
        navigate("/paymentsuccess");
      }, 2000);
    }
  };

  return (
    <Container maxW="sm">
      <Box
        boxShadow="lg"
        px={6}
        py={4}
        rounded="md"
        w="full"
        maxW="400px"
        mx="auto"
        bg="rgba(255, 255, 255, 0.8)"
      >
        <Stack spacing={2}>
          <Box textAlign="center">
            <Text fontSize="2xl" fontWeight="bold">
              Payment Details
            </Text>
          </Box>
          {paymentError && (
            <Alert status="error">
              <AlertIcon />
              There was an error processing your payment. Please try again.
            </Alert>
          )}
          <form onSubmit={handleSubmit}>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                isRequired
              />
            </FormControl>
            <FormControl>
              <FormLabel>Address</FormLabel>
              <Input
                type="text"
                placeholder="Enter address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                isRequired
              />
            </FormControl>
            <FormControl>
              <FormLabel>Card Number</FormLabel>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <FaCreditCard color="gray.300" />
                </InputLeftElement>
                <Input
                  type="number"
                  placeholder="Enter card number"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  isRequired
                />
              </InputGroup>
            </FormControl>
            <FormControl>
              <FormLabel>Expiration Date</FormLabel>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <FaCalendar color="gray.300" />
                </InputLeftElement>
                <Input
                  type="number"
                  placeholder="MM/YY"
                  value={expirationDate}
                  onChange={(e) => setExpirationDate(e.target.value)}
                  isRequired
                />
              </InputGroup>
            </FormControl>
            <FormControl>
              <FormLabel>CVV</FormLabel>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <FaLock color="gray.300" />
                </InputLeftElement>
                <Input
                  type="number"
                  placeholder="CVV"
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value)}
                  isRequired
                />
              </InputGroup>
            </FormControl>

            <Button
              type="submit"
              colorScheme="blue"
              isLoading={isSubmitting}
              loadingText="Processing"
              spinnerPlacement="end"
              mt={4}
              w="full"
              isDisabled={totalAmount === 0}
            >
              Payment Amount ₹ {isAuth && totalAmount ? totalAmount : 0}
            </Button>
          </form>
        </Stack>
      </Box>
    </Container>
  );
};

export default PaymentFrom;
