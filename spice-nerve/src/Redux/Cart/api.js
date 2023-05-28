import axios from "axios";
import {
	addCartData,
	addWishlistData,
	deleteCartData,
	deleteWishlistData,
	getCartData,
	getWishlistData,
} from "./action";

const baseUrl = "https://crocsland.onrender.com/users";

const axiosInstance = axios.create({
	baseURL: baseUrl,
});

const getRequest = async (url) => {
	try {
		const response = await axiosInstance.get(url);
		return response.data;
	} catch (error) {
		console.log(error);
		throw error;
	}
};

const patchRequest = async (url, data) => {
	try {
		const response = await axiosInstance.patch(url, data);
		return response.data;
	} catch (error) {
		console.log(error);
		throw error;
	}
};

export const getCartRequest = (id) => async (dispatch) => {
	const url = `/${id}`;
	try {
		const data = await getRequest(url);
		dispatch(getCartData(data.cart));
	} catch (error) {
		// Handle error
	}
};

export const addCartRequest = (id, product) => async (dispatch) => {
	const url = `/${id}`;
	try {
		const data = await patchRequest(url, { cart: product });
		dispatch(addCartData(data.cart));
	} catch (error) {
		// Handle error
	}
};

export const deleteCartApi = (id, newCart) => async (dispatch) => {
	const url = `/${id}`;
	try {
		const data = await patchRequest(url, { cart: newCart });
		dispatch(deleteCartData(data.cart));
	} catch (error) {
		// Handle error
	}
};

export const updateCartApi = (id, newCart) => async (dispatch) => {
	const url = `/${id}`;
	try {
		const data = await patchRequest(url, { cart: newCart });
		dispatch(addCartData(data.cart));
	} catch (error) {
		// Handle error
	}
};

export const getWishlistRequest = (id) => async (dispatch) => {
	const url = `/${id}`;
	try {
		const data = await getRequest(url);
		dispatch(getWishlistData(data.wishlist));
	} catch (error) {
		// Handle error
	}
};

export const addWishlistRequest = (id, product) => async (dispatch) => {
	const url = `/${id}`;
	try {
		const data = await patchRequest(url, { wishlist: product });
		dispatch(addWishlistData(data.wishlist));
	} catch (error) {
		// Handle error
	}
};

export const deleteWishlistApi = (id, newWishlist) => async (dispatch) => {
	const url = `/${id}`;
	try {
		const data = await patchRequest(url, { wishlist: newWishlist });
		dispatch(deleteWishlistData(data.wishlist));
	} catch (error) {
		console.log(error);
	}
};

export const updateWishlistApi = (id, newWishlist) => async (dispatch) => {
	const url = `/${id}`;
	try {
		const data = await patchRequest(url, { wishlist: newWishlist });
		dispatch(addWishlistData(data.wishlist));
	} catch (error) {
		// Handle error
	}
};
