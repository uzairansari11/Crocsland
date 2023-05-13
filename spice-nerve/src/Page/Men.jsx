import { Box } from "@chakra-ui/react";
import { Products } from "./Products";
import { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../Redux/NewProduct/action";
import { PaginationComponent } from "../Component/Pagination";

export const Men = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const dispatch = useDispatch();
	const product = useSelector((store) => store.newProductReducer);
	const [currentPage, setCurrentPage] = useState(
		parseInt(searchParams.get("_page")) || 1
	);
	const location = useLocation();
	const handlePagination = (value) => {
		setCurrentPage(value);
	};

	useEffect(() => {
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
				_limit: searchParams.get("_limit"),
			},
		};

		dispatch(getProducts(filterParams));

		// Update the URL with the new page value
		searchParams.set("_page", currentPage);
		setSearchParams(searchParams.toString());
	}, [location.search, currentPage, dispatch, searchParams, setSearchParams]);

	return (
		<Box>
			<Products {...product} />
			<PaginationComponent
				totalCount={product.totalCount}
				handlePagination={handlePagination}
				currentPage={currentPage}
			/>
		</Box>
	);
};
