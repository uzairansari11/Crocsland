import * as types from "./actionType";

const initialState = {
	isLoading: false,
	isError: false,
	cart: [],
	order: [],
	wishlist: [],
};

const reducer = (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case types.ADD_CART_DATA:
			return {
				...state, cart: payload, isLoading: false,
				isError: false,
			};

		case types.GET_CART_DATA:
			return {
				...state, cart: payload, isLoading: false,
				isError: false,
			};

		case types.DELETE_CART_DATA:
			return {
				...state,
				cart: payload,
				isLoading: false,
				isError: false,
			};


		case types.ADD_WISHLIST_DATA:
			return {
				...state, wishlist: payload, isLoading: false,
				isError: false,
			};

		case types.GET_WISHLIST_DATA:
			return {
				...state, wishlist: payload, isLoading: false,
				isError: false,
			};

		case types.DELETE_WISHLIST_DATA:
			return {
				...state,
				wishlist: payload,
				isLoading: false,
				isError: false,
			};
		default:
			return state;
	}
};

export { reducer };
