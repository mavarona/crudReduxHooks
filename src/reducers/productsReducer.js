import {
    ADD_PRODUCT,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_ERROR,
    INIT_DOWNLOAD_PRODUCTS,
    DOWNLOAD_PRODUCTS_SUCCESS,
    DOWNLOAD_PRODUCTS_ERROR
} from "../types";

const initialState = {
    products: [],
    error: null,
    loading: false
};

export default function(state = initialState, action) {
    switch (action.type) {
        case ADD_PRODUCT:
            return {
                ...state,
                error: null
            };
        case ADD_PRODUCT_SUCCESS:
            return {
                ...state,
                error: null,
                products: [...state.products, action.payload]
            };
        case ADD_PRODUCT_ERROR:
            return {
                ...state,
                error: action.payload
            };
        case INIT_DOWNLOAD_PRODUCTS:
            return {
                ...state,
                loading: true
            }
        case DOWNLOAD_PRODUCTS_SUCCESS:
            return {
                ...state,
                products: action.payload,
                loading: false,
                error: null
            }
        case DOWNLOAD_PRODUCTS_ERROR:
            return {
                ...state,
                products: [],
                error: action.payload,
                loading: false
            }
        default:
            return state;
    }
}