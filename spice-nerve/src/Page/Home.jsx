import React from "react";
import banner1 from "../files/banner-1.avif";
import banner2 from "../files/banner-2.PNG";
import banner3 from "../files/banner-3.PNG";
import banner4 from "../files/banner-4.PNG";
import banner5 from "../files/banner-5.PNG";

import { Box, Image, Button, Grid, Center } from "@chakra-ui/react";
import Faq from "../Component/Faq";
export const Home = () => {
  return (
    <Box>
      <Box bgGradient="linear(to-l, #7928CA, #FF0080)">
        <Image src={banner1} alt="" p={12} />


     </Box>
     <Grid
       spacing={1}
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
         m={2}
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
         m={2}
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
         m={2}
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
         m={2}
         _hover={{
           bg: "#7928CA",
           color: "white",
         }}
       >
         SHOP JIBBITZ™
       </Button>
      </Grid>
      <Box >
        <Center>
        <Image src={banner2} alt="" p={2} />
        </Center>

      </Box>
      <Box >
        <Center>


        <Image src={banner3} alt="" p={2} />
        </Center>

      </Box>
      <Box >
        <Center>
        <Image src={banner4} alt="" p={2} />

        </Center>
      </Box>
      <Box >
        <Center>
        <Image src={banner5} alt="" p={2} />

        </Center>
      <Center>
        <Box  w={'2xl'} p={2} m={2} >
        <Faq />

        </Box>
      </Center>

      </Box>
   </Box>
 );
};
