import { Checkbox, CheckboxGroup } from "@chakra-ui/checkbox";
import { Box, Flex, Stack, Text } from "@chakra-ui/layout";
import { Radio, RadioGroup } from "@chakra-ui/radio";
import React, { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { Button as AutButton } from "antd";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { PoweroffOutlined } from "@ant-design/icons";
import {
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionPanel,
	AccordionIcon,
	Button,
} from "@chakra-ui/react";

export const Filter = ({
	category,
	setCategory,
	brand,
	setBrand,
	discountRange,
	setDiscountRange,
	setPage,
	setCat,
}) => {
	// let location = useLocation();
	// useEffect(() => {}, [location.search]);
	// console.log(category, brand, discountRange);
	const handleCategories = (e) => {
		// console.log(e);
		setPage(1);
		setCategory(e);
		setDiscountRange("");
	};
	const handleBrands = (e) => {
		setPage(1);
		setBrand(e);
		setDiscountRange("");
	};
	const handleDiscountRange = (e) => {
		setPage(1);
		setDiscountRange(e);
	};

	return (
		<Box
			pl={"2rem"}
			alignContent={"center"}
			shadow={"xl"}
			mt={4}
			px={4}
			py={5}
			borderRadius={2}
		>
			<Box>
				<Box display={"flex"} alignItems={"center"} gap={2}>
					<Text
						my="1rem"
						fontWeight={"bold"}
						textTransform={"uppercase"}
						fontSize="0.95rem"
					>
						Filters
					</Text>
					<AutButton type="primary" danger>
						Reset Filter
					</AutButton>
				</Box>

				<CheckboxGroup
					colorScheme="pink"
					value={category}
					defaultValue={category}
					onChange={handleCategories}
				>
					<Stack spacing={"1"} color="gray.500" textTransform={"capitalize"}>
						{setCat == "MensData" && (
							<Flex flexDir={"column"}>
								<Checkbox value="Shirt">Shirt</Checkbox>
								<Checkbox value="Joggers">Joggers</Checkbox>
							</Flex>
						)}
						{setCat == "WomensData" && (
							<Flex flexDir={"column"}>
								<Checkbox value="KurtaSet">KurtaSet</Checkbox>
							</Flex>
						)}
						{setCat == "ChildrensData" && (
							<Flex flexDir={"column"}>
								<Checkbox value="SweatShirt">SweatShirt</Checkbox>
							</Flex>
						)}
					</Stack>
				</CheckboxGroup>
			</Box>
			<Box>
				<Accordion allowMultiple>
					<AccordionItem>
						<AccordionButton>
							<Box as="span" flex="1" textAlign="left">
								Category
							</Box>
							<AccordionIcon />
						</AccordionButton>

						<AccordionPanel pb={4}>
							<CheckboxGroup
								colorScheme="pink"
								defaultValue={brand}
								value={brand}
								onChange={handleBrands}
							>
								<Stack spacing={"1"} color="gray.500">
									<Checkbox value="Roadster">Clogs</Checkbox>
									<Checkbox value="HIGHLANDER">Boots</Checkbox>
									<Checkbox value="U.S. Polo Assn">Sandle</Checkbox>
									<Checkbox value="Jack & Jones">Slides</Checkbox>
									<Checkbox value="WROGN">Wrogn</Checkbox>
									<Checkbox value="HERE&NOW">Flip</Checkbox>
								</Stack>
							</CheckboxGroup>
						</AccordionPanel>
					</AccordionItem>
					<AccordionItem>
						<AccordionButton>
							<Box as="span" flex="1" textAlign="left">
								Price
							</Box>
							<AccordionIcon />
						</AccordionButton>

						<AccordionPanel pb={4}>
							<CheckboxGroup
								colorScheme="pink"
								defaultValue={brand}
								value={brand}
								onChange={handleBrands}
							>
								<Stack spacing={"1"} color="gray.500">
									<RadioGroup
										onChange={handleDiscountRange}
										value={discountRange}
									>
										<Stack direction="column" color={"gray.500"}>
											<Radio value="10" colorScheme={"pink"}>
												Low to High
											</Radio>
											<Radio value="20" colorScheme={"pink"}>
												High to Low
											</Radio>
										</Stack>
									</RadioGroup>
								</Stack>
							</CheckboxGroup>
						</AccordionPanel>
					</AccordionItem>
					<AccordionItem>
						<AccordionButton>
							<Box as="span" flex="1" textAlign="left">
								Discount
							</Box>
							<AccordionIcon />
						</AccordionButton>

						<AccordionPanel pb={4}>
							<RadioGroup onChange={handleDiscountRange} value={discountRange}>
								<Stack direction="column" color={"gray.500"}>
									<Radio value="10" colorScheme={"pink"}>
										10% and above
									</Radio>
									<Radio value="20" colorScheme={"pink"}>
										20% and above
									</Radio>
									<Radio value="30" colorScheme={"pink"}>
										30% and above
									</Radio>
									<Radio value="40" colorScheme={"pink"}>
										40% and above
									</Radio>
									<Radio value="50" colorScheme={"pink"}>
										50% and above
									</Radio>
									<Radio value="60" colorScheme={"pink"}>
										60% and above
									</Radio>
									<Radio value="70" colorScheme={"pink"}>
										70% and above
									</Radio>
								</Stack>
							</RadioGroup>
						</AccordionPanel>
					</AccordionItem>

					<AccordionItem>
						<h2>
							<AccordionButton>
								<Box as="span" flex="1" textAlign="left">
									<Text fontSize={16} fontWeight={400}>
										Rating
									</Text>
								</Box>
								<AccordionIcon />
							</AccordionButton>
						</h2>
						<AccordionPanel pb={4}>
							<RadioGroup
								colorScheme="pink"
								// value={rating}
								// onChange={productRatingOnchange}
							>
								<Stack spacing={1} direction={"column"}>
									{[4, 3, 2, 1].map((index) => {
										return (
											<Radio
												value={`${index},${index + 1}`}
												key={Date() + Math.random() + Date.now()}
											>
												<Flex
													color="pink"
													alignItems={"center"}
													// gap="2px"
												>
													<Flex>
														{Array(5)
															.fill("")
															.map((_, i) => {
																const roundedRating = Math.round(index * 2) / 2;
																if (roundedRating - i >= 1) {
																	return (
																		<BsStarFill
																			key={
																				Date() + Math.random() + i + Date.now()
																			}
																			style={{ marginLeft: "1" }}
																		/>
																	);
																}
																if (roundedRating - i === 0.5) {
																	return (
																		<BsStarHalf
																			key={Date() + Math.random() + i + "B"}
																			style={{ marginLeft: "1" }}
																		/>
																	);
																}
																return (
																	<BsStar
																		key={Date() + Math.random() + i + "A"}
																		style={{ marginLeft: "1" }}
																	/>
																);
															})}
													</Flex>
													<Text color="sm.sparkle">& up</Text>
												</Flex>
											</Radio>
										);
									})}
								</Stack>
							</RadioGroup>
						</AccordionPanel>
					</AccordionItem>
				</Accordion>
			</Box>
		</Box>
	);
};
