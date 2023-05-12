import {
	legacy_createStore,
	applyMiddleware,
	compose,
	combineReducers,
} from "redux";
import thunk from "redux-thunk";

import { reducer as newProductReducer } from "./NewProduct/reducer";
import { reducer as authReducer } from "./Authentication/reducer";
import { reducer as cartReducer } from "./Cart/reducer"
const rootReducer = combineReducers({
	newProductReducer, authReducer,
	cartReducer


});
const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = legacy_createStore(
	rootReducer,
	enhancer(applyMiddleware(thunk)),
);
