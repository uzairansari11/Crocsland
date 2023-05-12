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

