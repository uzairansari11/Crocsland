import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Box, Center, Grid, HStack, Stack, Badge } from "@chakra-ui/react";
import { ProductsCard } from "../Component/ProductsCard";
import { ApiContext } from "../Context/ApiContext";
import { Loading } from "../Component/Loading";
import { Error } from "../Component/Error";
import { Filter } from "../Component/Filter";
export const Products = () => {
	const { apiData } = useContext(ApiContext);
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	const getDataFromApi = (value) => {
		setLoading(true);
		axios
			.get(
				`https://crabby-culottes-ant.cyclic.app/products?category=${value}&_limit=8`,
			)
			.then((res) => {
				setLoading(false);
				setData(res.data);
			})
			.catch((err) => {
				setLoading(false);
				setError(true);
			});
	};
	useEffect(() => {
		getDataFromApi(apiData);
		window.scrollTo(0, 0);
	}, [apiData]);

	return loading ? (
		<Loading />
	) : error ? (
		<Error />
	) : (
		<Center mt={14}>
			<Box display={"flex"} justifyContent={"space-around"} width={"full"}>
				<Box>
					<Filter />
				</Box>

				<Center>
					<Grid
						templateColumns={{
							base: "repeat(1, 1fr)",
							md: "repeat(3, 1fr)",
							lg: "repeat(4, 1fr)",
						}}
						gap={6}
						p={4}
					>
						{data?.map((ele) => (
							<ProductsCard key={ele.id} {...ele} />
						))}
					</Grid>
				</Center>
			</Box>
		</Center>
	);
};
