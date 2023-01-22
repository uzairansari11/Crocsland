import { Card, Text, Heading, Image, Stack, CardBody } from "@chakra-ui/react";

import React from "react";
import { Link as ReactLink } from "react-router-dom";

export const ProductsCart = ({
    id,
    image,
    title,
    description,
    price,
    gender,
}) => {
    return (
        <Card maxW="sm"  >
            <ReactLink to={`/product/${id}`}>
                <CardBody>
                    <Image src={image} alt={title} borderRadius="lg" />
                    <Stack mt="6" spacing="3">
                        <Heading size="md">{title}</Heading>
                        <Text>{description.substring(0, 50)}</Text>

                        <Text color="black" fontSize="2xl">
                            Price: ${price}
                        </Text>
                        <Text color="black" fontSize="2xl">
                            Price: ${gender}
                        </Text>
                    </Stack>
                </CardBody>
            </ReactLink>
        </Card>
    );
};
