import React, { useEffect, useState } from "react";
import { TextInput } from "@mantine/core";
import { CiSearch } from "react-icons/ci";
import { Box, Text, useBoolean } from "@chakra-ui/react";
import { useThrottle } from "use-throttle";
import { Link } from "react-router-dom";
import axios from "axios";

const Search = (props) => {
	const [query, setQuery] = useState("");
	const [suggestions, setSuggestions] = useState([]);
	const [showDropdown, setShowDropdown] = useBoolean();
	const [product, setProducts] = useState([]);

	const throttledText = useThrottle(query, 400);

	const getDataFromApi = () => {
		axios
			.get(`https://crabby-culottes-ant.cyclic.app/products`)
			.then((res) => {
				setProducts(res.data);
			})
			.catch((err) => {
				
			});
	};
	useEffect(() => {
		getDataFromApi();
	}, []);

	useEffect(() => {
		if (throttledText === "") {
			setSuggestions([]);
		} else {
		
			let newSuggestions = product.filter((item) => {
				return item.title
					.split(" ")
					.join("")
					.trim()
					.toLowerCase()
					.indexOf(throttledText) !== -1
					? true
					: false;
			});

			setSuggestions(newSuggestions);
			setShowDropdown.on();
		}
	}, [throttledText]);

	return (
		<Box
			className="search_main"
			width="60%"
			display="flex"
			margin="auto"
			border="1px solid red"
		>
			<div className="search_tile" style={{ marginTop: "4rem" }}>
				<TextInput
					icon={<CiSearch size="1.1rem" stroke={1.5} />}
					radius="xl"
					size="md"
					value={query}
					onChange={(e) => setQuery(e.target.value)}
					placeholder="Search Products"
					rightSectionWidth={42}
					{...props}
				/>
			</div>
			<div className="search_result">
				<Box
					w="70%"
					margin="auto"
					display={"flex"}
					justifyContent={"space-around"}
				>
					{suggestions.length > 0 && (
						<Box
							margin="auto"
							border="1px solid black"
							borderRadius="5px"
							position="absolute"
							top="100"
							zIndex="10"
							bgColor="white"
							overflow="scroll"
							maxH="250px"
							w="60%"
						>
							{suggestions.map((item) => {
								return (
									<Link to={`/product/${item.id}`} key={item.id}>
										<Text
											fontSize="xl"
											cursor="pointer"
											onClick={setShowDropdown.off}
										>
											{item.Title}
										</Text>
									</Link>
								);
							})}
						</Box>
					)}
				</Box>
			</div>
		</Box>
	);
};

export default Search;
