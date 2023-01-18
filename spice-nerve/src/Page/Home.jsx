import React from 'react'
import banner from "../files/banner-1.avif"
import { Box ,Image} from '@chakra-ui/react'
export const Home = () => {
  return (
    <Box>


      <Box bgGradient='linear(to-l, #7928CA, #FF0080)' >

        <Image src={banner} alt=""  p={12} />
    </Box>


    </Box>
  )
}
