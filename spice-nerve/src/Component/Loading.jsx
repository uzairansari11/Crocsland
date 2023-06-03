import React from "react";
import { Box } from "@chakra-ui/react";
import styles from "./Loading.module.css";

export const Loading = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Box display="flex" alignItems="center">
        <Box className={styles["loading-dot"]} />
        <Box className={styles["loading-dot"]} />
        <Box className={styles["loading-dot"]} />

      </Box>
    </Box>
  );
};
