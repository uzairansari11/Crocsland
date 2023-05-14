import React from "react";
import { Box, Heading, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NotFound = () => {
    return (
        <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            minHeight="80vh"
        >
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <Box textAlign="center">
                    <Heading as="h1" size="2xl" mb={4}>
                        Page Not Found
                    </Heading>
                    <Text fontSize="xl" color="gray.600">
                        Oops! The page you are looking for does not exist.
                    </Text>
                    <Button
                        as={Link}
                        to="/"
                        colorScheme="teal"
                        size="lg"
                        mt={6}
                    >
                        Go to Home
                    </Button>
                </Box>
            </motion.div>
        </Box>
    );
};

export default NotFound;
