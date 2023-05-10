import axios from "axios";

export const getProductApi = async (filterValue) => {
	try {
		let response = await axios.get(
			`https://crabby-culottes-ant.cyclic.app/products`,
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
			`https://crabby-culottes-ant.cyclic.app/products/${id}`,
		);
		return response.data;
	} catch (error) {
		console.log(error);
	}
};
