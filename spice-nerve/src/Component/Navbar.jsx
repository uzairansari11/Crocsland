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
    useBreakpointValue,
    useDisclosure,
    Image,
    Input,
} from "@chakra-ui/react";
import { AiOutlineShoppingCart } from 'react-icons/fa';
import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
} from "@chakra-ui/icons";
import logo from "../files/logo.png";
import { Link as ReactLink } from "react-router-dom";
export default function Navbar () {
    const { isOpen, onToggle } = useDisclosure();
    const count = 14;
    return (
     <Box
         position={"fixed"}
         w={"full"}
         top={0}
         left={0}
         zIndex={3}

     >
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
                     icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
                     variant={"ghost"}
                     aria-label={"Toggle Navigation"}
                 />
             </Flex>

             <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
                 <ReactLink to="/">
                     <Box>
                         <Image
                             src={logo}

                             w={'70%'}

                         />
                     </Box>
                 </ReactLink>
                 <Flex display={{ base: "none", md: "flex" }} ml={10}>
                     <DesktopNav />
                 </Flex>
             </Flex>

             <Stack
                 flex={{ base: 1, md: 0.2}}
                    justifyItems={"space-around"}
                    direction={"row"}

                 spacing={3}


             >
                    <Input
                        display={{ sm: "inline-flex" }}
                        fontSize={"sm"}
                        p={"2"}
w={'-webkit-fit-content'}

placeholder="search"



                    />


                 <ReactLink to="/login">
                     <Button
                         display={{ xl: "inline-flex" }}
                         fontSize={"sm"}
                         fontWeight={300}
                         color={"black"}
                         bg={"#8c52ff"}

                         _hover={{
                             bg: "#8c52ff",
                         }}
                     >
                         Sign In
                     </Button>
                    </ReactLink>
                    <ReactLink   to="/cart">
                    <Button
                        display={{ xl: "inline-flex" }}
                        fontSize={"sm"}
                        fontWeight={300}
                        color={"black"}
                        bg={"#ff6262"}
                        p={"2"}


                        _hover={{
                            bg: "#ff6262",
                        }}
                    >
                        Cart
                    </Button>
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
    const linkColor = useColorModeValue("gray.600", "gray.200");
    const linkHoverColor = useColorModeValue("gray.800", "white");
    const popoverContentBgColor = useColorModeValue("white", "gray.800");

    return (
        <Stack direction={"row"} spacing={4}>
            {NAV_ITEMS.map((navItem) => (
                <Box key={navItem.label}>
                    <Popover trigger={"hover"} placement={"bottom-start"}>
                        <PopoverTrigger>
                            <Link
                                p={2}
                                href={navItem.href ?? "#"}
                                fontSize={"sm"}
                                fontWeight={500}
                                color={linkColor}
                                _hover={{
                                    textDecoration: "none",
                                    color: linkHoverColor,
                                }}
                            >
                                {navItem.label}
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

const DesktopSubNav = ({ label, href, subLabel }) => {
    return (
        <Link
            href={href}
            role={"group"}
            display={"block"}
            p={2}
            rounded={"md"}
            _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
        >
            <Stack direction={"row"} align={"center"}>
                <Box>
                    <Text
                        transition={"all .3s ease"}
                        _groupHover={{ color: "pink.400" }}
                        fontWeight={500}
                    >
                        {label}
                    </Text>
                    <Text fontSize={"sm"}>{subLabel}</Text>
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

const MobileNavItem = ({ label, children, href }) => {
    const { isOpen, onToggle } = useDisclosure();

    return (
        <Stack spacing={4} onClick={children && onToggle}>
            <Flex
                py={2}
                as={Link}
                href={href ?? "#"}
                justify={"space-between"}
                align={"center"}
                _hover={{
                    textDecoration: "none",
                }}
            >
                <Text fontWeight={600} color={useColorModeValue("gray.600", "gray.200")}>
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
                         <Link key={child.label} py={2} href={child.href}>
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
                href: "#",
            },
            {
                label: "Boots",

          href: "#",
      },
      {
          label: "Sandle",

          href: "#",
      },
      {
          label: "Slides",

          href: "#",
      },
      {
          label: "Flip Flops",

          href: "#",
      },

      {
          label: "Socks",

                href: "#",
            },
        ],
    },
    {
        label: "MEN",
        children: [
            {
                label: "Clogs",
                href: "#",
            },
            {
                label: "Boots",

          href: "#",
      },
      {
          label: "Sandle",

          href: "#",
      },
      {
          label: "Slides",

          href: "#",
      },
      {
          label: "Flip Flops",

          href: "#",
      },

      {
          label: "Socks",

                href: "#",
            },
        ],
    },
    {
        label: "KIDS",
        children: [
            {
                label: "Clogs",
                href: "#",
            },
            {
                label: "Boots",

          href: "#",
      },
      {
          label: "Sandle",

          href: "#",
      },
      {
          label: "Slides",

          href: "#",
      },
      {
          label: "Flip Flops",

          href: "#",
      },
     
      {
          label: "Socks",

                href: "#",
            },
        ],
    },

    {
        label: "WORK",
        children: [
            {
                label: "Nursing Shoes",

          href: "#",
      },
      {
          label: "Chef Shoes",

          href: "#",
      },
      {
          label: "Slip - Resistant Shoes",

          href: "#",
      },
      {
          label: "Standing Shoes",

          href: "#",
      },
      {
          label: "Hospitality Shoes",

                href: "#",
            },
        ],
    },

    {
        label: "SALES",
        children: [
            {
                label: "$19.99 or Less",

          href: "#",
      },
      {
          label: "$20.00 - $29.99",

          href: "#",
      },
      {
          label: "$30.00 - $39.99",

          href: "#",
      },
      {
          label: "$40.00 - $49.99",

                href: "#",
            },
        ],
    },
    {
        label: "FEATURED",
        children: [
            {
                label: "Harry Potter",

          href: "#",
      },
      {
          label: "Pokemon",

          href: "#",
      },
      {
          label: "Disney",

          href: "#",
      },
      {
          label: "Marvel",

          href: "#",
      },
      {
          label: "Pixar",

          href: "#",
      },
      {
          label: "Star Wars",

          href: "#",
      },
      {
          label: "Paw Patrol",

          href: "#",
      },
      {
          label: "DC Comics",

          href: "#",
      },
      {
          label: "Nickelodeon",

          href: "#",
      },
      {
          label: "Warner Brothers",

                href: "#",
            },
        ],
    },
];
