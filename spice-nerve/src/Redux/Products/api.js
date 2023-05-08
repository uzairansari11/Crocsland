import axios from "axios";

export const getProductFromAPI = async (
	currentPage,
	productsPerPage,
	q,
	price_lte,
	price_gte,
	category,
	sort,
) => {
	const URL = `https://crabby-culottes-ant.cyclic.app/products${
		q !== "" ? `?q=${q}` : "?q="
	}${category !== "" ? `&category=${category}` : ""}${
		sort !== "" ? `&_sort=${sort}` : ""
	}${currentPage !== "" ? `&_page=${currentPage}` : ""}${
		productsPerPage !== "" ? `&_limit=${productsPerPage}` : ""
	}${price_gte !== "" ? `&price_gte=${price_gte}` : ""}${
		price_lte !== "" ? `&price_lte=${price_lte}` : ""
	}`;

	const responce = await axios.get(URL);

	return responce;
};
