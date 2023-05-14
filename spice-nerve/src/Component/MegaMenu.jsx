import { Box, Flex, Text } from "@chakra-ui/react";
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
			<Link to="/men">
				<Text
					fontSize="1.1rem"
					color="gray.600"
					_hover={{ color: "blue.500" }}
					_active={{ color: "blue.500", fontWeight: "bold" }}
				>
					Mens
				</Text>
			</Link>

			<Link to="/women">
				<Text
					fontSize="1.1rem"
					color="gray.600"
					_hover={{ color: "pink.500" }}
					_active={{ color: "pink.500", fontWeight: "bold" }}
				>
					Womens
				</Text>
			</Link>

			<Link to="/kid">
				<Text
					fontSize="1.1rem"
					color="gray.600"
					_hover={{ color: "green.500" }}
					_active={{ color: "green.500", fontWeight: "bold" }}
				>
					Kids
				</Text>
			</Link>
		</Flex>
	);
};

export default MegaMenu;
