import * as types from "./actionType"

const initialState = {
	isLoading: false,
	isError: false,
	products: [],
	totalCount: 0,
};

export const reducer = (oldState = initialState, action) => {
	switch (action.type) {
		case types.Product_Request:
			return {
				...oldState,
				isLoading: true,
			};

		case types.Get_Product_Success:
			return {
				...oldState,
				isLoading: false,
				products: action.payload.data,
				totalCount: Number(action.payload.headers["x-total-count"]),
			};
		case types.Product_Error:
			return {
				...oldState,
				isLoading: false,
				isError: true,
			};

		default:
			return oldState;
	}
};
