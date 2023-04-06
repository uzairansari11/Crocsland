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
                        <Heading as='h4' size="sm"> Price: ${price}</Heading>
                        <Heading as='h4' size="sm">  Gender: {gender}</Heading>

                    </Stack>
                </CardBody>
            </ReactLink>
        </Card>
    );
};
