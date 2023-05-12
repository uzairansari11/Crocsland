import { Box, Center, Grid } from "@chakra-ui/react";
import { ProductsCard } from "../Component/ProductsCard";
import { Loading } from "../Component/Loading";
import { Error } from "../Component/Error";
import { Filter } from "../Component/Filter";

export const Products = ({ isLoading, isError, products }) => {
	return isLoading ? (
		<Loading />
	) : isError ? (
		<Error />
	) : (
		<Center>
			<Box display={"flex"} justifyContent={"space-around"} width={"full"}>
				<Box>
					<Filter />
				</Box>

				<Grid
					templateColumns={{
						base: "repeat(1, 1fr)",
						md: "repeat(3, 1fr)",
						lg: "repeat(4, 1fr)",
					}}
					gap={6}
					p={4}
				>
					{products?.map((ele) => (
						<ProductsCard key={ele.id} {...ele} />
					))}
				</Grid>
			</Box>
		</Center>
	);
};
