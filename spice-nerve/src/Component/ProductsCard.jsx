import { Card, Text, Image, Stack, CardBody, Box } from "@chakra-ui/react";

import React from "react";
import { Link as ReactLink } from "react-router-dom";
import { useState } from "react";
import { DynamicStar } from "react-dynamic-star";
export const ProductsCard = ({
	id,
	title,
	offerPrice,
	originalPrice,
	discount,
	quantity,
	image,
	category,
	subCategory,
	size,
	rating,
	ratingCount,
	description,
}) => {
	const [star, setStar] = useState({
		rating: rating,
		totalStars: 5,
		sharpness: 2.5,
		width: 15,
		height: 15,
		outlined: true,
		outlinedColor: "",
		fullStarColor: "red",
		emptyStarColor: "transparent",
	});
	return (
		<Card maxW="sm">
			<ReactLink to={`/product/${id}`}>
				<CardBody textAlign={"left"}>
					<Image src={image} alt={title} borderRadius="lg" />
					<Stack>
						<Text size="md">{title}</Text>
						<Text size="sm"> Offer Price: ₹ {offerPrice}</Text>
						<Text size="sm" as="s">
							{" "}
							Price: ₹ {originalPrice}
						</Text>
						<Text size="sm" as="mark">
							{" "}
							Discount: {discount}
						</Text>
						<Text size="sm"> Gender: {category}</Text>
						<Box display="flex" alidnItem="center">
							<Text>
								Rating : {rating}
								<DynamicStar
									rating={parseFloat(star.rating)}
									width={parseFloat(star.width)}
									height={parseFloat(star.height)}
									outlined={
										star.outlinedColor ? star.outlinedColor : star.outlined
									}
									totalStars={star.totalStars}
									sharpnessStar={star.sharpness}
									fullStarColor={star.fullStarColor}
									emptyStarColor={star.emptyStarColor}
								/>
							</Text>
						</Box>
					</Stack>
				</CardBody>
			</ReactLink>
		</Card>
	);
};
