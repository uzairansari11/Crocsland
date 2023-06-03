import { Box } from "@chakra-ui/react";
import { Products } from "./Products";
import { useEffect, useState, useCallback } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../Redux/NewProduct/action";
import { PaginationComponent } from "../Component/Pagination";
import { Loading } from "../Component/Loading";

export const Men = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const product = useSelector((store) => store.newProductReducer);
  const [currentPage, setCurrentPage] = useState(
    parseInt(searchParams.get("_page")) || 1
  );
  const [totalPages, setTotalPages] = useState(1);

  const location = useLocation();
  const [isProductLoaded, setIsProductLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Initialize loading state to false

  const handlePagination = useCallback(
    (value) => {
      if (value > totalPages) {
        setCurrentPage(totalPages);
      } else if (value < 1) {
        setCurrentPage(1);
      } else {
        setCurrentPage(value);
      }
    },
    [totalPages]
  );

  useEffect(() => {
    const fetchData = async () => {
      window.scrollTo(0, 0);
      const filterParams = {
        params: {
          _page: currentPage,
          subCategory: searchParams.getAll("filter"),
          category: "men",
          _sort: "offerPrice",
          _order: searchParams.get("_order"),
          discount_gte: searchParams.get("discount_gte"),
          rating_gte: searchParams.get("rating_gte"),
          _limit:6
        },
      };

      setIsLoading(true); // Set loading state to true before fetching data
      await dispatch(getProducts(filterParams));
      setIsProductLoaded(true);
      setIsLoading(false); // Set loading state to false after data is fetched
    };

    fetchData();
  }, [searchParams, currentPage, dispatch]);

  useEffect(() => {
    if (product.totalCount) {
      setTotalPages(Math.ceil(product.totalCount / 6));
    }
  }, [product.totalCount]);

  useEffect(() => {
    window.scrollTo(0, 0);
    const params = new URLSearchParams(location.search);
    params.set("_page", currentPage);
    setSearchParams(params);
  }, [currentPage, setSearchParams, location.search]);

  return (
    <Box>
      {isLoading ? (
        <Loading /> // Render loading spinner if loading
      ) : (
        <>
          {isProductLoaded && <Products {...product} />}
          {isProductLoaded && (
            <PaginationComponent
              totalPages={totalPages}
              handlePagination={handlePagination}
              currentPage={currentPage}
            />
          )}
        </>
      )}
    </Box>
  );
};
