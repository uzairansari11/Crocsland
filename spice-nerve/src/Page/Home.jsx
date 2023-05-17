import React, { useEffect } from "react";
import banner1 from "../files/banner-1.avif";
import banner2 from "../files/banner-2.PNG";
import banner3 from "../files/banner-3.PNG";
import banner4 from "../files/banner-4.PNG";
import banner5 from "../files/banner-5.PNG";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Link as ReactLink } from "react-router-dom";
import { Box, Image, Button, Grid, Center, Text } from "@chakra-ui/react";
import Faq from "../Component/Faq";

export const Home = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<Box bgGradient="linear(to-l, #A0AEC0, #E2E8F0)">
			<ReactLink to="/women">
				<Box>
					<Image src={banner1} alt="" p={12} />
				</Box>
			</ReactLink>
			<Grid
				spacing={1}
				templateColumns={{
					base: "repeat(1, 1fr)",
					sm: "repeat(1, 1fr)",
					md: "repeat(2, 1fr)",
					lg: "repeat(4, 1fr)",
				}}
				justifyItems="center"
				m="1rem"
			>
				<ReactLink to="/women">
					<Button
						rightIcon={<ArrowForwardIcon />}
						colorScheme="teal"
						variant="solid"
						size="md"
						height="48px"
						width="200px"
						m={2}
						_hover={{
							bg: "teal.500",
							color: "white",
						}}
						fontFamily="Montserrat, sans-serif"
					>
						SHOP WOMEN’S
					</Button>
				</ReactLink>
				<ReactLink to="/men">
					<Button
						rightIcon={<ArrowForwardIcon />}
						colorScheme="teal"
						variant="solid"
						size="md"
						height="48px"
						width="200px"
						m={2}
						_hover={{
							bg: "teal.500",
							color: "white",
						}}
						fontFamily="Montserrat, sans-serif"
					>
						SHOP MEN’S
					</Button>
				</ReactLink>
				<ReactLink to="/kid">
					<Button
						rightIcon={<ArrowForwardIcon />}
						colorScheme="teal"
						variant="solid"
						size="md"
						height="48px"
						width="200px"
						m={2}
						_hover={{
							bg: "teal.500",
							color: "white",
						}}
						fontFamily="Montserrat, sans-serif"
					>
						SHOP KIDS’
					</Button>
				</ReactLink>
				<Button
					rightIcon={<ArrowForwardIcon />}
					colorScheme="teal"
					variant="outline"
					size="md"
					height="48px"
					width="200px"
					m={2}
					_hover={{
						bg: "teal.500",
						color: "white",
					}}
				>
					Coming Soon ...
				</Button>
			</Grid>
			<ReactLink to="/men">
				<Box>
					<Center>
						<Image src={banner2} alt="" p={2} />
					</Center>
				</Box>
			</ReactLink>
			<Box>
				<Center>
					<Image src={banner3} alt="" p={2} />
				</Center>
			</Box>

			<ReactLink to="/women">
				<Box>
					<Center>
						<Image src={banner4} alt="" p={2} />
					</Center>
				</Box>
			</ReactLink>
			<Box>
				<Center>
					<Image src={banner5} alt="" p={2} />
				</Center>
				<Center>
					<Box w={"2xl"} p={2} m={2}>
						<Faq />
					</Box>
				</Center>
			</Box>
		</Box>
	);
};
