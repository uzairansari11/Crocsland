import {
	legacy_createStore,
	applyMiddleware,
	compose,
	combineReducers,
} from "redux";
import thunk from "redux-thunk";

import { reducer as newProductReducer } from "./NewProduct/reducer"

const rootReducer = combineReducers({

	newProductReducer,
});
const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = legacy_createStore(
	rootReducer,
	enhancer(applyMiddleware(thunk)),
);
