import {
	Box,
	Flex,
	Text,
	IconButton,
	Button,
	Stack,
	Collapse,
	Icon,
	Link,
	Popover,
	PopoverTrigger,
	PopoverContent,
	useColorModeValue,
	useDisclosure,
	Image,
	Input,
} from "@chakra-ui/react";

import {
	HamburgerIcon,
	CloseIcon,
	ChevronDownIcon,
	ChevronRightIcon,
	Search2Icon,
} from "@chakra-ui/icons";
import { Badge } from "@chakra-ui/react";
import logo from "../files/logo.png";
import { Link as ReactLink } from "react-router-dom";
import {
	ShoppingCartOutlined,
	StarFilled,
	StarTwoTone,
} from "@ant-design/icons";
import { useContext } from "react";
import { ApiContext } from "../Context/ApiContext";
import { AuthContext } from "../Context/AuthContextProvider";
import { cartQuantityContext } from "../Context/CartQunatityContext";
export default function Navbar() {
	const { authentification, logout } = useContext(AuthContext);
	const { isOpen, onToggle } = useDisclosure();
	const { item, totalItem } = useContext(cartQuantityContext);
	const handleLogout = async () => {
		localStorage.setItem("isAuthUse", false);
		localStorage.setItem("name", null);
		logout();
		window.location.reload(false);
	};

	return (
		<Box position={"fixed"} w={"full"} top={0} left={0} zIndex={3}>
			<Flex
				bg={useColorModeValue("white", "gray.800")}
				color={useColorModeValue("gray.600", "white")}
				minH={"60px"}
				py={{ base: 2 }}
				px={{ base: 4 }}
				borderBottom={1}
				borderStyle={"solid"}
				borderColor={useColorModeValue("gray.200", "gray.900")}
				align={"center"}
			>
				<Flex
					flex={{ base: 1, md: "auto" }}
					ml={{ base: -2 }}
					display={{ base: "flex", md: "none" }}
				>
					<IconButton
						onClick={onToggle}
						icon={
							isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
						}
						variant={"ghost"}
						aria-label={"Toggle Navigation"}
					/>
				</Flex>

				<Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
					<ReactLink to="/">
						<Box>
							<Image src={logo} w={"70%"} />
						</Box>
					</ReactLink>
					<Flex display={{ base: "none", md: "flex" }} ml={10}>
						<DesktopNav />
					</Flex>
				</Flex>

				<Stack
					flex={{ base: 1, md: 0.2 }}
					justifyItems={"space-around"}
					direction={"row"}
					spacing={3}
					alignItems={"center"}
				>
					<ReactLink to="/search">
						<Icon
							as={Search2Icon}
							_hover={{
								cursor: "pointer",
							}}
						/>
					</ReactLink>
					{authentification.isAuth ? (
						<Button
							display={{ xl: "inline-flex" }}
							fontSize={"sm"}
							fontWeight={600}
							color={"white"}
							bg={"#8c52ff"}
							_hover={{
								bg: "#8c52ff",
							}}
							onClick={handleLogout}
						>
							Logout {authentification.name}
						</Button>
					) : (
						<ReactLink to="/login">
							<Button
								display={{ xl: "inline-flex" }}
								fontSize={"sm"}
								fontWeight={600}
								color={"white"}
								bg={"#8c52ff"}
								_hover={{
									bg: "#8c52ff",
								}}
							>
								Sign In
							</Button>
						</ReactLink>
					)}

					<ReactLink to="/cart">
						<ShoppingCartOutlined style={{ fontSize: "25px", color: "#08c" }} />
						<Badge colorScheme={"facebook"} borderRadius={"25px"}>
							{item ? item : 0}
						</Badge>
					</ReactLink>
				</Stack>
			</Flex>

			<Collapse in={isOpen} animateOpacity>
				<MobileNav />
			</Collapse>
		</Box>
	);
}

const DesktopNav = () => {
	const { apiData, setApiData } = useContext(ApiContext);
	const linkColor = useColorModeValue("gray.600", "gray.200");
	const linkHoverColor = useColorModeValue("gray.800", "white");
	const popoverContentBgColor = useColorModeValue("white", "gray.800");

	const handleApiParameter = (data) => {
		const dataforfetch = data.toLowerCase();
		setApiData(dataforfetch);
	};
	return (
		<Stack direction={"row"} spacing={4}>
			{NAV_ITEMS.map((navItem) => (
				<Box
					key={navItem.label}
					onClick={() => handleApiParameter(navItem.label)}
				>
					<Popover trigger={"hover"} placement={"bottom-start"}>
						<PopoverTrigger>
							<Link
								p={2}
								fontSize={"sm"}
								fontWeight={500}
								color={linkColor}
								_hover={{
									textDecoration: "none",
									color: linkHoverColor,
								}}
							>
								<ReactLink to="/product">{navItem.label}</ReactLink>
							</Link>
						</PopoverTrigger>

						{navItem.children && (
							<PopoverContent
								border={0}
								boxShadow={"xl"}
								bg={popoverContentBgColor}
								p={4}
								rounded={"xl"}
								minW={"sm"}
							>
								<Stack>
									{navItem.children.map((child) => (
										<DesktopSubNav key={child.label} {...child} />
									))}
								</Stack>
							</PopoverContent>
						)}
					</Popover>
				</Box>
			))}
		</Stack>
	);
};

const DesktopSubNav = ({ label }) => {
	const { apiData, setApiData } = useContext(ApiContext);
	const handleSubParameter = (data) => {
	};
	return (
		<Link
			role={"group"}
			display={"block"}
			p={2}
			rounded={"md"}
			_hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
		>
			<Stack direction={"row"} align={"center"}>
				<Box onClick={() => handleSubParameter(label)}>
					<Text
						transition={"all .3s ease"}
						_groupHover={{ color: "pink.400" }}
						fontWeight={500}
					>
						{label}
					</Text>
				</Box>
				<Flex
					transition={"all .3s ease"}
					transform={"translateX(-10px)"}
					opacity={0}
					_groupHover={{ opacity: "100%", transform: "translateX(0)" }}
					justify={"flex-end"}
					align={"center"}
					flex={1}
				>
					<Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
				</Flex>
			</Stack>
		</Link>
	);
};

const MobileNav = () => {
	return (
		<Stack
			bg={useColorModeValue("white", "gray.800")}
			p={4}
			display={{ md: "none" }}
		>
			{NAV_ITEMS.map((navItem) => (
				<MobileNavItem key={navItem.label} {...navItem} />
			))}
		</Stack>
	);
};

const MobileNavItem = ({ label, children }) => {
	const { isOpen, onToggle } = useDisclosure();

	return (
		<Stack spacing={4} onClick={children && onToggle}>
			<Flex
				py={2}
				as={Link}
				justify={"space-between"}
				align={"center"}
				_hover={{
					textDecoration: "none",
				}}
			>
				<Text
					fontWeight={600}
					color={useColorModeValue("gray.600", "gray.200")}
				>
					{label}
				</Text>
				{children && (
					<Icon
						as={ChevronDownIcon}
						transition={"all .25s ease-in-out"}
						align={"center"}
						transform={isOpen ? "rotate(180deg)" : ""}
						w={6}
						h={6}
					/>
				)}
			</Flex>

			<Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
				<Stack
					mt={2}
					pl={4}
					borderLeft={1}
					borderStyle={"solid"}
					borderColor={useColorModeValue("gray.200", "gray.700")}
					align={"start"}
				>
					{children &&
						children.map((child) => (
							<Link key={child.label} py={2}>
								{child.label}
							</Link>
						))}
				</Stack>
			</Collapse>
		</Stack>
	);
};

const NAV_ITEMS = [
	{
		label: "WOMEN",
		children: [
			{
				label: "Clogs",
			},
			{
				label: "Boots",
			},
			{
				label: "Sandle",
			},
			{
				label: "Slides",
			},
			{
				label: "Flip Flops",
			},
		],
	},
	{
		label: "MEN",
		children: [
			{
				label: "Clogs",
			},
			{
				label: "Boots",
			},
			{
				label: "Sandle",
			},
			{
				label: "Slides",
			},
			{
				label: "Flip Flops",
			},
		],
	},
	{
		label: "KIDS",
		children: [
			{
				label: "Clogs",
			},
			{
				label: "Boots",
			},
			{
				label: "Sandle",
			},
			{
				label: "Slides",
			},
			{
				label: "Flip Flops",
			},
		],
	},

	// {
	// 	label: "WORK",
	// 	children: [
	// 		{
	// 			label: "Nursing Shoes",
	// 		},
	// 		{
	// 			label: "Chef Shoes",
	// 		},
	// 		{
	// 			label: "Slip - Resistant Shoes",
	// 		},
	// 		{
	// 			label: "Standing Shoes",
	// 		},
	// 		{
	// 			label: "Hospitality Shoes",
	// 		},
	// 	],
	// },

	// {
	// 	label: "SALES",
	// 	children: [
	// 		{
	// 			label: "$19.99 or Less",
	// 		},
	// 		{
	// 			label: "$20.00 - $29.99",
	// 		},
	// 		{
	// 			label: "$30.00 - $39.99",
	// 		},
	// 		{
	// 			label: "$40.00 - $49.99",
	// 		},
	// 	],
	// },
	// {
	// 	label: "FEATURED",
	// 	children: [
	// 		{
	// 			label: "Harry Potter",
	// 		},
	// 		{
	// 			label: "Pokemon",
	// 		},
	// 		{
	// 			label: "Disney",
	// 		},
	// 		{
	// 			label: "Marvel",
	// 		},
	// 		{
	// 			label: "Pixar",
	// 		},
	// 		{
	// 			label: "Star Wars",
	// 		},
	// 		{
	// 			label: "Paw Patrol",
	// 		},
	// 		{
	// 			label: "DC Comics",
	// 		},
	// 		{
	// 			label: "Nickelodeon",
	// 		},
	// 		{
	// 			label: "Warner Brothers",
	// 		},
	// 	],
	// },
];
