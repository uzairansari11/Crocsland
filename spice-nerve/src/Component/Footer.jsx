import React from "react";
import {
	Box,
	Container,
	Stack,
	SimpleGrid,
	Text,
	Link,
	VisuallyHidden,
	chakra,
	useColorModeValue,
} from "@chakra-ui/react";
import { FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

const ListHeader = ({ children }) => {
	return (
		<Text fontWeight="bold" fontSize="lg" mb={2}>
			{children}
		</Text>
	);
};

const SocialButton = ({ children, label, href }) => {
	return (
		<chakra.button
			bg={useColorModeValue("gray.100", "whiteAlpha.100")}
			rounded="full"
			w={8}
			h={8}
			cursor="pointer"
			as="a"
			href={href}
			display="flex"
			alignItems="center"
			justifyContent="center"
			transition="background 0.3s ease"
			_hover={{
				bg: useColorModeValue("gray.200", "whiteAlpha.200"),
			}}
		>
			<VisuallyHidden>{label}</VisuallyHidden>
			{children}
		</chakra.button>
	);
};

export default function LargeWithAppLinksAndSocial() {
	return (
		<Box bg={useColorModeValue("gray.100", "gray.900")}>
			<Container as={Stack} maxW="6xl" py={10}>
				<SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
					<Stack align="flex-start">
						<ListHeader>CrocsLAND Insiders</ListHeader>
						<Link href="#">CrocsLAND Club</Link>
						<Link href="#">Collaborations & Limited Editions</Link>
						<Link href="#">Student Discount</Link>
						<Link href="#">Teacher Discount</Link>
						<Link href="#">Military Discount</Link>
						<Link href="#">Healthcare Discount</Link>
						<Link href="#">Affiliate Program</Link>
					</Stack>

					<Stack align="flex-start">
						<ListHeader>Company</ListHeader>
						<Link href="#">About CrocsLAND</Link>
						<Link href="#">CrocsLAND Purpose</Link>
						<Link href="#">Careers</Link>
						<Link href="#">Investor Relations</Link>
						<Link href="#">Custom Orders</Link>
						<Link href="#">Wholesale Inquiries</Link>
					</Stack>

					<Stack align="flex-start">
						<ListHeader>Help</ListHeader>
						<Link href="#">Order Status & Returns</Link>
						<Link href="#">FAQs</Link>
						<Link href="#">Size Chart</Link>
						<Link href="#">Accessibility</Link>
						<Link href="#">Caring for your CrocsLAND</Link>
						<Link href="#">Contact Us</Link>
					</Stack>

					<Stack align="flex-start">
						<ListHeader>Customer Service</ListHeader>
						<Text>Mon - Opens at 9 AM ET</Text>
						<Text>Tues - Thurs 24 Hours</Text>
						<Text>Fri Closes at 5 PM ET</Text>
						<Text>Sat - Sun CLOSED</Text>
					</Stack>
				</SimpleGrid>
			</Container>

			<Box
				borderTopWidth={1}
				borderStyle={"solid"}
				borderColor={useColorModeValue("gray.200", "gray.700")}
			>
				<Container
					as={Stack}
					maxW={"6xl"}
					py={4}
					direction={{ base: "column", md: "row" }}
					spacing={4}
					justify={{ md: "space-between" }}
					align={{ md: "center" }}
				>
					<Text>CrocsLAND Everyone`s Love </Text>
					<Stack direction={"row"} spacing={6}>
						<SocialButton label={"Twitter"} href={"#"}>
							<FaTwitter />
						</SocialButton>
						<SocialButton label={"YouTube"} href={"#"}>
							<FaYoutube />
						</SocialButton>
						<SocialButton label={"Instagram"} href={"#"}>
							<FaInstagram />
						</SocialButton>
					</Stack>
				</Container>
			</Box>
		</Box>
	);
}
