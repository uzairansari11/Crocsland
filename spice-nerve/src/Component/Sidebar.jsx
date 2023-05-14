import React from "react";
import { Link } from "react-router-dom";
import {
	Box,
	Drawer,
	DrawerCloseButton,
	DrawerContent,
	DrawerOverlay,
	Flex,
	Image,
	Text,
	useDisclosure,
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";

function Sidebar({ userID, handleLogout }) {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const btnRef = React.useRef();

	const handleUserLogout = () => {
		handleLogout();
		onClose();
	};

	return (
		<Box display={{ lg: "none" }}>
			<Link to="#" onClick={onOpen}>
				<GiHamburgerMenu size={24} />
			</Link>
			<Drawer isOpen={isOpen} placement="left" onClose={onClose} finalFocusRef={btnRef}>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton />
					<Box p="1rem">
						<Image
							src="https://i.ibb.co/tX9nZsT/Peachpuff-Brush-Stroke-Photography-Logo-1-removebg-preview.png"
							alt="logo"
							width="7rem"
							height={{ base: "5rem", md: "100%" }}
						/>
					</Box>
					<Flex justify="center" pl="1rem" gap="5" flexDir="column" mx="2rem" mt="2rem">
						<Link to="/" onClick={onClose}>
							<Text as="button" fontSize="1.5rem" borderBottomWidth="2px" fontWeight="bold">
								Home
							</Text>
						</Link>

						<Link to="/men" onClick={onClose}>
							<Text as="button" fontSize="1.5rem" borderBottomWidth="2px" fontWeight="bold">
								Mens
							</Text>
						</Link>
						<Link to="/women" onClick={onClose}>
							<Text as="button" fontSize="1.5rem" borderBottomWidth="2px" fontWeight="bold">
								Womens
							</Text>
						</Link>
						<Link to="/kid" onClick={onClose}>
							<Text as="button" fontSize="1.5rem" borderBottomWidth="2px" fontWeight="bold">
								Kids
							</Text>
						</Link>
						<Flex justify="center">
							{userID ? (
								<Link to="#" onClick={handleUserLogout}>
									<Text as="button" fontWeight="bold">
										Logout
									</Text>
								</Link>
							) : (
								<Link to="/login" onClick={onClose}>
									<Text as="button" fontWeight="bold">
										Login
									</Text>
								</Link>
							)}
						</Flex>
					</Flex>
				</DrawerContent>
			</Drawer>
		</Box>
	);
}

export default Sidebar;
