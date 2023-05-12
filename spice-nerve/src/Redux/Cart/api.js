import axios from "axios";
import { addCartData, addWishlistData, deleteCartData, deleteWishlistData, getCartData, getWishlistData } from "./action";

/* -----------------------------Cart  functionality--------------------------  */

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
		const res = await axios.patch(`https://crocsland.onrender.com/users/${id}`, {
			cart: product,
		});

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
/* ------------------------------------------------------------------- */

/* -----------------------------Wishlist  functionality--------------------------  */
export const getWishlistRequest = (id) => (dispatch) => {
	try {
		axios.get(`https://crocsland.onrender.com/users/${id}`).then((res) => {
			dispatch(getWishlistData(res.data.wishlist));
		});
	} catch (error) {
		console.log(error);
	}
};

export const addWishlistRequest = (id, product) => async (dispatch) => {
	try {
		const res = await axios.patch(`https://crocsland.onrender.com/users/${id}`, {
			wishlist: product,
		});

		dispatch(addWishlistData(res.data.wishlist));
	} catch (error) {
		console.log(error);
	}
};

export const deleteWishlistApi = (id, newWishlist) => async (dispatch) => {
	try {
		let res = await axios.patch(`https://crocsland.onrender.com/users/${id}`, {
			wishlist: newWishlist,
		});
		let data = await res.data.wishlist;
		dispatch(deleteWishlistData(data));
	} catch (e) {
		console.log(e);
	}
};

export const updateWishlistApi = (id, newWishlist) => async (dispatch) => {
	try {
		let res = await axios.patch(`https://crocsland.onrender.com/users/${id}`, {
			wishlist: newWishlist,
		});
		let data = await res.data.wishlist;
		dispatch(addCartData(data));
	} catch (e) {
		console.log(e);
	}
};

/* ------------------------------------------------------------------- */
