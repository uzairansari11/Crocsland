import {
    Box,
Container,
    Stack,
    Text,
    Image,
Center,
    VStack,
    Button,
    Heading,
    SimpleGrid,
    StackDivider,
    useColorModeValue,
    GridItem,
Select,
    List,
    ListItem,
} from '@chakra-ui/react';

import { MdLocalShipping } from 'react-icons/md';

export default function ProductDetails () {
    return (
        <Container maxW={'full'}  >
            <SimpleGrid
                columns={{ base: 1, lg: 2 }}
                spacing={{ base: 8, md: 10 }}
                py={{ base: 18, md: 24 }}>
                <GridItem>
                    <Box  p={ 2}>
                    <Image
                        rounded={'md'}
                        alt={'product image'}
                        src={
                            'https://media.crocs.com/images/t_pdphero/f_auto%2Cq_auto/products/203591_5Q6_ALT100/crocs'
                        }
                        fit={'cover'}
                        align={'center'}
                        w={'100%'}
                        h={{ base: '100%', sm: '400px', lg: '500px' }}
                    />
                    </Box>
                    <VStack spacing={{ base: 4, sm: 6 }}>
                        <Text
                            color={useColorModeValue('gray.500', 'gray.400')}
                            fontSize={'2xl'}
                            fontWeight={'300'}>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                            diam nonumy eirmod tempor invidunt ut labore
                        </Text>
                        <Text fontSize={'lg'}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                            aliquid amet at delectus doloribus dolorum expedita hic, ipsum
                            maxime modi nam officiis porro, quae, quisquam quos
                            reprehenderit velit? Natus, totam.
                        </Text>
                    </VStack>

                </GridItem>
                <Stack spacing={{ base: 6, md: 10 }}>
                    <Box as={'header'}>
                        <Heading
                            lineHeight={1.1}
                            fontWeight={600}
                            fontSize={{ base: 'xl', sm: '2xl', lg: '3xl' }}>
                            Automatic Watch
                        </Heading>
                        <Text
                            color={useColorModeValue('gray.900', 'gray.400')}
                            fontWeight={400}
                            fontSize={'2xl'}
                            mt={"2"}>
                            Price:$350.00 USD

                        </Text>
                    </Box>

                    <Stack
                        spacing={{ base: 4, sm: 6 }}
                        direction={'column'}
                        divider={
                            <StackDivider
                                borderColor={useColorModeValue('gray.200', 'gray.600')}
                            />
                        }>
                        <Center><Box>

                            <Select placeholder='Select Your Size'>
                                <option value='4'>4</option>
                                <option value='5'>5</option>
                                <option value='6'>6</option>
                                <option value='7'>7</option>
                                <option value='8'>8</option>
                                <option value='9'>9</option>
                            </Select>
                        </Box></Center>



                        <Box>
                            <Text
                                fontSize={{ base: '16px', lg: '18px' }}
                                color={useColorModeValue('yellow.500', 'yellow.300')}
                                fontWeight={'500'}
                                textTransform={'uppercase'}
                                mb={'4'}>
                                Product Details
                            </Text>


                            <List spacing={2}>
                                <ListItem>
                                    <Text as={'span'} fontWeight={'bold'}>
                                        Between lugs:
                                    </Text>{' '}
                                    20 mm
                                </ListItem>
                                <ListItem>
                                    <Text as={'span'} fontWeight={'bold'}>
                                        Bracelet:
                                    </Text>{' '}
                                    leather strap
                                </ListItem>
                                <ListItem>
                                    <Text as={'span'} fontWeight={'bold'}>
                                        Case:
                                    </Text>{' '}
                                    Steel
                                </ListItem>
                                <ListItem>
                                    <Text as={'span'} fontWeight={'bold'}>
                                        Case diameter:
                                    </Text>{' '}
                                    42 mm
                                </ListItem>
                                <ListItem>
                                    <Text as={'span'} fontWeight={'bold'}>
                                        Dial color:
                                    </Text>{' '}
                                    Black
                                </ListItem>
                                <ListItem>
                                    <Text as={'span'} fontWeight={'bold'}>
                                        Crystal:
                                    </Text>{' '}
                                    Domed, scratch‑resistant sapphire crystal with anti‑reflective
                                    treatment inside
                                </ListItem>
                                <ListItem>
                                    <Text as={'span'} fontWeight={'bold'}>
                                        Water resistance:
                                    </Text>{' '}
                                    5 bar (50 metres / 167 feet){' '}
                                </ListItem>
                            </List>
                        </Box>

                    </Stack>
                    <Center  >
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
                            transform: 'translateY(2px)',
                            boxShadow: 'lg',
                        }}
                    >
                            Add to Cart
                        </Button>
                    </Center>
                    {/* <Button
                        rounded={'none'}

                        mt={8}
                        size={'md'}
                        py={'6'}
                        bg={useColorModeValue('gray.900', 'gray.50')}
                        color={useColorModeValue('white', 'gray.900')}
                        textTransform={'uppercase'}
                        _hover={{

                        }}>
                        Add to cart
                    </Button> */}

                    <Stack direction="row" alignItems="center" justifyContent={'center'}>
                        <MdLocalShipping />
                        <Text>2-3 business days delivery</Text>
                    </Stack>
                </Stack>
            </SimpleGrid>
        </Container>
    );
}