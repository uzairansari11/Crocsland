import * as types from "./actionType";
var userDetails = JSON.parse(localStorage.getItem("userResponse"));
const initialState = {
    isLoading: false,
    isAuth: userDetails?.token ? true : false,
    users: [],
    token: userDetails?.token ? userDetails?.token : false,
    isError: false,
    isRegisterSuccess: false,
    userID: userDetails?.userID || null,
    name: userDetails?.name || null
};

export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case types.isLoading:
            return {
                ...state,
                isLoading: true,
            };

        case types.Login_Success:
            return {
                ...state,
                isAuth: true,
                token: payload.token,
                isLoading: false,
                userID: payload.userID,
                name: payload.name
            };

        case types.isError:
            return {
                ...state,
                isAuth: false,
                token: false,
                isLoading: false,
                isError: true,
            };

        case types.Register_Success:
            return {
                ...state,
                isLoading: false,
                users: [...state.users, payload],
            };

        case types.User_Data_Success:
            return {
                ...state,
                isLoading: false,
                users: payload,
            };

        case types.User_Logout:
            return {
                isAuth: false,
                token: false,
                isLoading: false,
                isError: false,
            };
        default:
            return state;
    }
};
