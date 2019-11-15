import { combineReducers } from "redux";
import productsReducer from "./productsReducer";
import validateReducer from "./validateProductsReducer";

export default combineReducers({
  products: productsReducer,
  error: validateReducer
});
