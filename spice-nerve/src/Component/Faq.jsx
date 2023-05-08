import {
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionPanel,
	Box,
} from "@chakra-ui/react";
import { MinusIcon, AddIcon } from "@chakra-ui/icons";

const Faq = () => {
	return (
		<Accordion allowMultiple>
			<AccordionItem>
				{({ isExpanded }) => (
					<>
						<h2>
							<AccordionButton>
								<Box as="span" flex="1" textAlign="left">
									Classic Clog and Slides
								</Box>
								{isExpanded ? (
									<MinusIcon fontSize="12px" />
								) : (
									<AddIcon fontSize="12px" />
								)}
							</AccordionButton>
						</h2>
						<AccordionPanel pb={4} textAlign="left">
							As our most popular and iconic shoe silhouettes, the Classic Clog
							and Slide come in a wide variety of colors and patterns, are easy
							to clean, and serve as the foundation of our exciting
							collaborations. Clogs also accommodate infinite amounts of
							personalization thanks to our ever-changing collection of Jibbitz™
							shoe charms.
						</AccordionPanel>
					</>
				)}
			</AccordionItem>
			<AccordionItem>
				{({ isExpanded }) => (
					<>
						<h2>
							<AccordionButton>
								<Box as="span" flex="1" textAlign="left">
									Sandals & Flip Flops
								</Box>
								{isExpanded ? (
									<MinusIcon fontSize="12px" />
								) : (
									<AddIcon fontSize="12px" />
								)}
							</AccordionButton>
						</h2>
						<AccordionPanel pb={4} textAlign="left">
							No matter the occasion, we offer a sandal to match. Each style is
							as versatile as it is comfy, always at the forefront of fashion
							trends, and available in a variety of colors and silhouettes
							including strappy, platform, bedazzled, open toe, flip flop, and
							more. Shop our official online store for the biggest selection of
							sandals for your whole family.
						</AccordionPanel>
					</>
				)}
			</AccordionItem>

			<AccordionItem>
				{({ isExpanded }) => (
					<>
						<h2>
							<AccordionButton>
								<Box as="span" flex="1" textAlign="left">
									Crocs at Work™
								</Box>
								{isExpanded ? (
									<MinusIcon fontSize="12px" />
								) : (
									<AddIcon fontSize="12px" />
								)}
							</AccordionButton>
						</h2>
						<AccordionPanel pb={4} textAlign="left">
							Crocs at Work™ styles are designed to work as hard as you are.
							Professionals such as healthcare and hospitality workers can enjoy
							round-the-clock comfort, slip-resistant technology, and easy to
							clean material that helps support during every shift. In addition,
							earlier this year, we supported our healthcare heroes battling
							COVID-19 by giving away thousands of free shoes during our Sharing
							a Free Pair for Healthcare giveaway.
						</AccordionPanel>
					</>
				)}
			</AccordionItem>
		</Accordion>
	);
};
export default Faq;
