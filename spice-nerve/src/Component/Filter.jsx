import { Checkbox, CheckboxGroup } from "@chakra-ui/checkbox";
import { Box, Flex, Stack, Text } from "@chakra-ui/layout";
import { Radio, RadioGroup } from "@chakra-ui/radio";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Button,
} from "@chakra-ui/react";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

export const Filter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialFilterValue = searchParams.getAll("filter");
  const initialRatingValue = searchParams.get("rating_gte");
  const initialDiscountValue = searchParams.get("discount_gte");
  const initialPageValue = searchParams.get("_page");
  const order = searchParams.get("_order");
  const [orderBy, setOrderBy] = useState(order || "");
  const [filterValues, setFilterValues] = useState(initialFilterValue || []);
  const [ratingValues, setRatingValues] = useState(initialRatingValue || "");
  const [discountValues, setDiscountValues] = useState(
    initialDiscountValue || ""
  );
  const [pageValue] = useState(initialPageValue || 1);

  const handleFilterChange = (value) => {
    setFilterValues(value);
  };

  const handlePriceChange = (value) => {
    setOrderBy(value);
  };

  const handleRatingChange = (value) => {
    setRatingValues(value);
  };

  const handleDiscountChange = (value) => {
    setDiscountValues(value);
  };

  const resetFilters = () => {
    setFilterValues([]);
    setOrderBy("");
    setRatingValues("");
    setDiscountValues("");
  };

  useEffect(() => {
    let params = {};
    if (filterValues.length) params.filter = filterValues;
    if (orderBy) {
      params._sort = "offerPrice";
      params._order = orderBy;
    }
    if (discountValues) {
      params.discount_gte = discountValues;
    }
    if (ratingValues) {
      params.rating_gte = ratingValues;
    }
    if (pageValue) {
      params._page = pageValue;
    }

    setSearchParams(params);
  }, [
    filterValues,
    orderBy,
    discountValues,
    ratingValues,
    pageValue,
    setSearchParams,
  ]);

  return (
    <Box
      alignContent={"center"}
      shadow={"xl"}
      px={6}
      borderRadius={10}
      py={"4"}
      marginY={"4"}
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
          <Button colorScheme="red" onClick={resetFilters}>
            Reset Filter
          </Button>
        </Box>
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
                colorScheme="green"
                value={filterValues}
                onChange={handleFilterChange}
              >
                <Stack spacing={"1"} color="gray.500">
                  <Checkbox value="clogs">Clogs</Checkbox>
                  <Checkbox value="boots">Boots</Checkbox>
                  <Checkbox value="sandals">Sandals</Checkbox>
                  <Checkbox value="slides">Slides</Checkbox>
                  <Checkbox value="flip-flop">Flip</Checkbox>
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
              <RadioGroup onChange={handlePriceChange} value={orderBy}>
                <Stack spacing={"1"} color="gray.500">
                  <Radio value="asc" colorScheme={"green"}>
                    Low to High
                  </Radio>
                  <Radio value="desc" colorScheme={"green"}>
                    High to Low
                  </Radio>
                </Stack>
              </RadioGroup>
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
              <RadioGroup
                value={discountValues}
                onChange={handleDiscountChange}
              >
                <Stack spacing={"1"} color="gray.500">
                  <Radio value="10" colorScheme={"green"}>
                    10% and above
                  </Radio>
                  <Radio value="20" colorScheme={"green"}>
                    20% and above
                  </Radio>
                  <Radio value="30" colorScheme={"green"}>
                    30% and above
                  </Radio>
                  <Radio value="40" colorScheme={"green"}>
                    40% and above
                  </Radio>
                  <Radio value="50" colorScheme={"green"}>
                    50% and above
                  </Radio>
                  <Radio value="60" colorScheme={"green"}>
                    60% and above
                  </Radio>
                  <Radio value="70" colorScheme={"green"}>
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
                colorScheme="green"
                value={ratingValues}
                onChange={handleRatingChange}
              >
                <Stack spacing={1} direction={"column"}>
                  {[4, 3, 2, 1].map((index) => {
                    return (
                      <Radio
                        value={`${index}`}
                        key={Date() + Math.random() + Date.now()}
                      >
                        <Flex color="black" alignItems={"center"}>
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
