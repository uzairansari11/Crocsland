import axios from "axios";
import { addCartData, deleteCartData, getCartData } from "./action";

export const getCartRequest = (id) => (dispatch) => {
	try {
		axios.get(`https://crocsland.onrender.com/users/${id}`).then((res) => {
			dispatch(getCartData(res.data.cart));
		});
	} catch (error) {
		console.log(error);
	}
};

export const addCartRequest = (id, product) => async (dispatch) => {
	try {
		const res = await axios.patch(
			`https://crocsland.onrender.com/users/${id}`,
			{
				cart: product,
			},
		);

		dispatch(addCartData(res.data.cart));
	} catch (error) {
		console.log(error);
	}
};

export const deleteCartApi = (id, newCart) => async (dispatch) => {
	try {
		let res = await axios.patch(`https://crocsland.onrender.com/users/${id}`, {
			cart: newCart,
		});
		let data = await res.data.cart;
		dispatch(deleteCartData(data));
	} catch (e) {
		console.log(e);
	}
};

export const updateCartApi = (id, newCart) => async (dispatch) => {
	try {
		let res = await axios.patch(`https://crocsland.onrender.com/users/${id}`, {
			cart: newCart,
		});
		let data = await res.data.cart;
		dispatch(addCartData(data));
	} catch (e) {
		console.log(e);
	}
};
