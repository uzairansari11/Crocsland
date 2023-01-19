import React from "react";
import banner from "../files/banner-1.avif";
import { Box, Image, Button, Grid } from "@chakra-ui/react";
export const Home = () => {
  return (
    <Box>
     <Box bgGradient="linear(to-l, #7928CA, #FF0080)">
       <Image src={banner} alt="" p={12} />

       {/* <Box
         w={"full"}
         b="0"
         align={"left"}
         border={"1px solid black"}
         position={"absolute"}
         zIndex={5}
       >
         {" "}
         <Button
           size="md"
           height="48px"
           width="200px"
           border="2px"
           borderColor=" #FF0080"
           _hover={{
             bg: "#7928CA",
             color: "white",
           }}
         >
           SHOP MEN’S
         </Button>
    </Box> */}
     </Box>
     <Grid
       spacing={4}
       templateColumns={{
         base: "repeat(1, 1fr)",
         sm: "repeat(1, 1fr)",
         md: "repeat(2, 1fr)",
         lg: "repeat(4, 1fr)",
       }}
       justifyItems="center"
       m={"1rem"}
     >
       <Button
         size="md"
         height="48px"
         width="200px"
         border="2px"
         borderColor="#7928CA"
         m={4}
         _hover={{
           bg: "#FF0080",
           color: "white",
         }}
       >
         SHOP WOMEN’S
       </Button>
       <Button
         size="md"
         height="48px"
         width="200px"
         border="2px"
         borderColor=" #FF0080"
         m={4}
         _hover={{
           bg: "#7928CA",
           color: "white",
         }}
       >
         SHOP MEN’S
       </Button>
       <Button
         size="md"
         height="48px"
         width="200px"
         border="2px"
         borderColor="#7928CA"
         m={4}
         _hover={{
           bg: "#FF0080",
           color: "white",
         }}
       >
         SHOP KIDS’
       </Button>
       <Button
         size="md"
         height="48px"
         width="200px"
         border="2px"
         borderColor=" #FF0080"
         m={4}
         _hover={{
           bg: "#7928CA",
           color: "white",
         }}
       >
         SHOP JIBBITZ™
       </Button>
     </Grid>
   </Box>
  );
};
