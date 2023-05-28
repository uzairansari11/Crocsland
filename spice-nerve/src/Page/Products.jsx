import React from "react";
import { Box, Grid, Text } from "@chakra-ui/react";
import { ProductsCard } from "../Component/ProductsCard";
import { Loading } from "../Component/Loading";
import { Error } from "../Component/Error";
import { Filter } from "../Component/Filter";

export const Products = React.memo(({ isLoading, isError, products }) => {
	if (isLoading) {
		return <Loading />;
	}

	if (isError) {
		return <Error />;
	}

	if (!products || products.length === 0) {
		return (
			<Box
				display="flex"
				justifyContent="center"
				alignItems="center"
				height="200px"
			>
				<Text fontSize="lg" fontWeight="bold">
					Product not found.
				</Text>
			</Box>
		);
	}

	return (
		<Box
			display="flex"
			flexWrap="wrap"
			justifyContent="space-evenly"
			width="100%"
			maxWidth="1200px"
			margin="auto"
			paddingX={{ base: "1rem", md: "2rem" }}
		>
			<Box width={{ base: "100%", md: "25%" }} marginBottom={{ base: "2rem", md: 0 }}>
				<Filter />
			</Box>
			<Box width={{ base: "100%", md: "75%" }}>
				<Grid
					templateColumns={{
						base: "repeat(2, 1fr)",
						md: "repeat(2, 1fr)",
						lg: "repeat(3, 1fr)",
					}}
					gap={{ base: 4, md: 6, lg: 8 }}
					py={4}
				>
					{products.map((ele) => (
						<ProductsCard key={ele.id} data={ele} />
					))}
				</Grid>
			</Box>
		</Box>
	);
});
