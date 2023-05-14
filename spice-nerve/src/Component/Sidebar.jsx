import React from "react";
import { Link } from "react-router-dom";
import {
	Box,
	Button,
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
			<Button ref={btnRef} colorScheme="pink" onClick={onOpen}>
				<GiHamburgerMenu />
			</Button>
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
						<Link to="/">
							<Button
								textAlign="center"
								fontSize="1.5rem"
								borderBottomWidth="2px"
								onClick={onClose}
							>
								Home
							</Button>
						</Link>

						<Link to="/men">
							<Button
								textAlign="center"
								fontSize="1.5rem"
								borderBottomWidth="2px"
								onClick={onClose}
							>
								Mens
							</Button>
						</Link>
						<Link to="/women">
							<Button
								textAlign="center"
								fontSize="1.5rem"
								borderBottomWidth="2px"
								onClick={onClose}
							>
								Womens
							</Button>
						</Link>
						<Link to="/kids">
							<Button
								textAlign="center"
								fontSize="1.5rem"
								borderBottomWidth="2px"
								onClick={onClose}
							>
								Kids
							</Button>
						</Link>
						<Flex justify="center">
							{userID ? (
								<Button onClick={handleUserLogout} px="2rem">
									Logout
								</Button>
							) : (
								<Link to="/login">
									<Button onClick={onClose} px="2rem">
										Login
									</Button>
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
