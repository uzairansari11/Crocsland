import { Box } from "@chakra-ui/react";
import { Products } from "./Products";
import { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../Redux/NewProduct/action";
import { PaginationComponent } from "../Component/Pagination";

export const Women = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const dispatch = useDispatch();
	const product = useSelector((store) => store.newProductReducer);
	const [currentPage, setCurrentPage] = useState(
		parseInt(searchParams.get("_page")) || 1
	);
	const [totalPages, setTotalPages] = useState(1);
	const limit = searchParams.get("_limit");
	const location = useLocation();

	const handlePagination = (value) => {
		if (value > totalPages) {
			setCurrentPage(totalPages);
		} else {
			setCurrentPage(value);
		}
	};

	useEffect(() => {
		const fetchData = async () => {
			window.scrollTo(0, 0);
			const filterParams = {
				params: {
					_limit: limit,
					_page: currentPage,
					subCategory: searchParams.getAll("filter"),
					category: "women",
					_sort: "offerPrice",
					_order: searchParams.get("_order"),
					discount_gte: searchParams.get("discount_gte"),
					rating_gte: searchParams.get("rating_gte"),
				},
			};

			await dispatch(getProducts(filterParams));
			if (product.totalCount && limit) {
				setTotalPages(Math.ceil(product.totalCount / limit));
			}
		};

		fetchData();
	}, [searchParams]);

	useEffect(() => {
		window.scrollTo(0, 0);
		const params = new URLSearchParams(location.search);
		params.set("_page", currentPage);
		setSearchParams(params);
	}, [currentPage, setSearchParams, location.search]);

	console.log(totalPages, "totalPages", currentPage, "currentPage");

	return (
		<Box>
			<Products {...product} />
			<PaginationComponent
				totalPages={totalPages}
				handlePagination={handlePagination}
				currentPage={currentPage}
			/>
		</Box>
	);
};
