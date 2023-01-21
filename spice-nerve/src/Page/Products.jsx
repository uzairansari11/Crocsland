import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Center, Grid } from "@chakra-ui/react";
import { ProductsCart } from "../Component/ProductsCart";
import { ApiContext } from "../Context/ApiContext";
import { Loading } from "../Component/Loading";
import { Error } from "../Component/Error";
export const Products = () => {
  const { apiData } = useContext(ApiContext);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getDataFromApi = (data) => {
    setLoading(true);
    axios
      .get(`http://localhost:8080/products?gender=${data}`)
      .then((res) => {
        setData(res.data);

     setLoading(false);
   })
      .catch((err) => {
        setLoading(false);
        setError(true);
      });
  };
  useEffect(() => {
    getDataFromApi(apiData);
  }, [apiData]);
  return loading ? (
    <Loading />
  ) : error ? (
    <Error />
  ) : (
        <Center mt="20" bgGradient="linear(to-l,#A0AEC0, #E2E8F0)"   >
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(3, 1fr)",
              lg: "repeat(4, 1fr)",

        }}
        gap={6}
            p={4}

      >
        {data?.map((ele) => (
          <ProductsCart key={ele.id} {...ele} />
        ))}
      </Grid>
    </Center>
  );
};
