import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Box, Center, Grid, HStack, Stack,Badge } from "@chakra-ui/react";
import { ProductsCart } from "../Component/ProductsCart";
import { ApiContext } from "../Context/ApiContext";
import { Loading } from "../Component/Loading";
import { Error } from "../Component/Error";
import { Select } from '@chakra-ui/react'
export const Products = () => {
  const { apiData } = useContext(ApiContext);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [sort, setSort] = useState(null)

  const getDataFromApi = (value) => {
    setLoading(true);

    axios
      .get(`https://crabby-culottes-ant.cyclic.app/products?gender=${value}`)
      .then((res) => {
        if (sort === "low") {
          const lowToHighData = res.data.sort((a, b) => {
            return a.price - b.price
          })
          setData(lowToHighData);
        } else if (sort === "high") {
          const highToLow = res.data.sort((a, b) => {
            return b.price - a.price
          })
          setData(highToLow);
        } else {
          setData(res.data)
        }


     setLoading(false);
   })
      .catch((err) => {
        setLoading(false);
        setError(true);
      });
  };
  useEffect(() => {
    getDataFromApi(apiData);
  }, [apiData, sort]);

  const handleSort = (value) => {

    setSort(value)
  
  }
  console.log(sort)
  return loading ? (
    <Loading />
  ) : error ? (
    <Error />
    ) : (
        <Box bgGradient="linear(to-l,#A0AEC0, #E2E8F0)"  >

          <Center w={'sm'}>
            <Stack>
              <Select placeholder='Sort By Price' mt="20" border={'1px solid red'} onChange={(e) => handleSort(e.target.value)}  >
                <option value='low'>Low to High</option>
                <option value='high'>High to Low</option>

              </Select>
            </Stack>
          </Center>
          <Center   >


      <Grid
        templateColumns={{
                base: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
                lg: "repeat(5, 1fr)",

        }}
        gap={6}
            p={4}

      >
        {data?.map((ele) => (
          <ProductsCart key={ele.id} {...ele} />
        ))}
      </Grid>
          </Center>
        </Box>
  );
};
