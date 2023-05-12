import * as types from "./actionType";

export const addCartData = (payload) => {
    return {
        type: types.ADD_CART_DATA,
        payload,
    };
};

export const getCartData = (payload) => {
    return {
        type: types.GET_CART_DATA,
        payload,
    };
};

export const deleteCartData = (payload) => {
    return {
        type: types.DELETE_CART_DATA,
        payload
    };
};


export const addWishlistData = (payload) => {
    return {
        type: types.ADD_WISHLIST_DATA,
        payload,
    };
};

export const getWishlistData = (payload) => {
    return {
        type: types.GET_WISHLIST_DATA,
        payload,
    };
};

export const deleteWishlistData = (payload) => {
    return {
        type: types.DELETE_WISHLIST_DATA,
        payload
    };
};
