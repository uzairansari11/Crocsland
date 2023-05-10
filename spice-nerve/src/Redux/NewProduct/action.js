import * as types from "./actionType"
import { getProductApi } from "./api";

const productRequest = () => {
	return {
		type: types.Product_Request,
	};
};

const productError = () => {
	return {
		type: types.Product_Error,
	};
};

const getProductSuccess = (data) => {
	return {
		type: types.Get_Product_Success,
		payload: data,
	};
};

export const getProducts = (filterValue) => async (dispatch) => {
	dispatch(productRequest());
	try {
		const data = await getProductApi(filterValue);
		if (data) {
			dispatch(getProductSuccess(data));
		}
	} catch (error) {
		dispatch(productError());
	}
};
