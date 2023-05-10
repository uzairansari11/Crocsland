import { Box, Flex } from "@chakra-ui/react";
import "./MegaMenu.css";
import React from "react";
import { Link } from "react-router-dom";

const MegaMenu = () => {
	return (
		<Flex
			height={"100%"}
			align="center"
			display={{ base: "none", lg: "Flex" }}
			width="36%"
			minW={"28rem"}
			justify={"space-around"}
			pos="relative"
		>
			<Link to="/men">Mens</Link>

			<Link to="/women">Womens</Link>

			<Link to="/kid">Kids</Link>
		</Flex>
	);
};

export default MegaMenu;
