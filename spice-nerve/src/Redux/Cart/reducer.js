import * as types from "./actionType";

const initialState = {
	cart: [],
	order: [],
	wishList: [],
};

const reducer = (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case types.ADD_CART_DATA:
			return { ...state, cart: payload };

		case types.GET_CART_DATA:
			return { ...state, cart: payload };

		case types.DELETE_CART_DATA:
			return {
				...state,
				cart: payload,
			};

		default:
			return state;
	}
};

export { reducer };
