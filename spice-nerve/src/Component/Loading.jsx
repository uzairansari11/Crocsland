import React from "react";
import { Box, Spinner } from "@chakra-ui/react";

export const Loading = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="red"
        boxSize="100px"
        zIndex="9999"
        sx={{
          borderRadius: "50%",
          borderStyle: "dotted",
          borderWidth: "8px",
          animation: "spin 1s infinite linear",
          margin: "8px",
        }}
      />
    </Box>
  );
};
