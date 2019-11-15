import {
    ADD_PRODUCT,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_ERROR,
    INIT_DOWNLOAD_PRODUCTS,
    DOWNLOAD_PRODUCTS_SUCCESS,
    DOWNLOAD_PRODUCTS_ERROR,
    GET_PRODUCT_TO_DELETE,
    DELETE_PRODUCT_SUCCESS,
    DELETE_PRODUCT_ERROR
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
        case GET_PRODUCT_TO_DELETE:
            return {
                ...state,
                error: null
            }
        case DELETE_PRODUCT_SUCCESS:
            return {
                ...state,
                error: null,
                products: state.products.filter(product => product.id !== action.payload)
            }
        case DELETE_PRODUCT_ERROR:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}