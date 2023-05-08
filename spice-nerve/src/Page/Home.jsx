import React from "react";
import banner1 from "../files/banner-1.avif";
import banner2 from "../files/banner-2.PNG";
import banner3 from "../files/banner-3.PNG";
import banner4 from "../files/banner-4.PNG";
import banner5 from "../files/banner-5.PNG";
import { useContext } from "react";
import { Link as ReactLink } from "react-router-dom";
import { Box, Image, Button, Grid, Center } from "@chakra-ui/react";
import Faq from "../Component/Faq";
import { ApiContext } from "../Context/ApiContext";
export const Home = () => {
	const { apiData, setApiData } = useContext(ApiContext);
	const handleApiParameter = (data) => {
		const dataforfetch = data.toLowerCase();
		setApiData(dataforfetch);
	};
	return (
		<Box bgGradient="linear(to-l,#A0AEC0, #E2E8F0)">
			<ReactLink to="/product">
				<Box bgGradient="linear(to-l, #7928CA, #FF0080)">
					<Image
						src={banner1}
						alt=""
						p={12}
						onClick={() => handleApiParameter("women")}
					/>
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
				m={"1rem"}
			>
				<ReactLink to="/product">
					<Button
						size="md"
						height="48px"
						width="200px"
						border="2px"
						borderColor="#7928CA"
						m={2}
						onClick={() => handleApiParameter("women")}
						_hover={{
							bg: "#FF0080",
							color: "white",
						}}
					>
						SHOP WOMEN’S
					</Button>
				</ReactLink>
				<ReactLink to="/product">
					<Button
						size="md"
						height="48px"
						width="200px"
						border="2px"
						borderColor=" #FF0080"
						m={2}
						onClick={() => handleApiParameter("men")}
						_hover={{
							bg: "#7928CA",
							color: "white",
						}}
					>
						SHOP MEN’S
					</Button>
				</ReactLink>

				<ReactLink to="/product">
					<Button
						size="md"
						height="48px"
						width="200px"
						border="2px"
						borderColor="#7928CA"
						onClick={() => handleApiParameter("kids")}
						m={2}
						_hover={{
							bg: "#FF0080",
							color: "white",
						}}
					>
						SHOP KIDS’
					</Button>
				</ReactLink>
				<Button
					size="md"
					height="48px"
					width="200px"
					border="2px"
					borderColor=" #FF0080"
					m={2}
					_hover={{
						bg: "#7928CA",
						color: "white",
					}}
				>
					SHOP WORK
				</Button>
			</Grid>
			<ReactLink to="/product">
				<Box>
					<Center>
						<Image
							src={banner2}
							alt=""
							p={2}
							onClick={() => handleApiParameter("men")}
						/>
					</Center>
				</Box>
			</ReactLink>
			<Box>
				<Center>
					<Image src={banner3} alt="" p={2} />
				</Center>
			</Box>

			<ReactLink to="/product">
				<Box>
					<Center>
						<Image
							src={banner4}
							alt=""
							p={2}
							onClick={() => handleApiParameter("kids")}
						/>
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
