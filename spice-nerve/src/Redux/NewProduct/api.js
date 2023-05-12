import axios from "axios";

export const getProductApi = async (filterValue) => {
	try {
		let response = await axios.get(
			`https://crocsland.onrender.com/products`,
			filterValue,
		);
		return response;
	} catch (error) {
		console.log(error);
	}
};

export const getSingleProduct = async (id) => {
	try {
		let response = await axios.get(
			`https://crocsland.onrender.com/products/${id}`,
		);
		return response.data;
	} catch (error) {
		console.log(error);
	}
};
