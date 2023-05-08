import {
    PRODUCTS_GET_ERROR,
    PRODUCTS_GET_LOADING,
    PRODUCTS_GET_SUCCESS,
} from "./actionType.js"

import { getProductFromAPI } from "./api";

export const getProducts =
    (
        currentPage,
        productsPerPage,
        q,
        price_lte,
        price_gte,
        discount_lte,
        discount_gte,
        category,
        timeToShip,
        returnable,
        cancellable,
        sort
    ) =>
        async (dispatch) => {
            dispatch({ type: PRODUCTS_GET_LOADING });
            try {
                let data = await getProductFromAPI(
                    currentPage,
                    productsPerPage,
                    q,
                    price_lte,
                    price_gte,
                    discount_lte,
                    discount_gte,
                    category,
                    timeToShip,
                    returnable,
                    cancellable,
                    sort
                );
                dispatch({ type: PRODUCTS_GET_SUCCESS, payload: data });
            } catch (err) {
                dispatch({ type: PRODUCTS_GET_ERROR });
            }
        };