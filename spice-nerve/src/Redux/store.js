import {
    legacy_createStore,
    applyMiddleware,
    compose,
    combineReducers,
} from "redux";
import thunk from "redux-thunk";
import { productsReducer } from "./Products/reducer";

const rootReducer = combineReducers({
    productsReducer
});
const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = legacy_createStore(
    rootReducer,
    enhancer(applyMiddleware(thunk)),
);
