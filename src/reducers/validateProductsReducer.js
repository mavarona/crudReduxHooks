import {
    VALIDATE_FORM_NEW_PRODUCT,
    VALIDATE_FORM_NEW_PRODUCT_SUCCESS,
    VALIDATE_FORM_NEW_PRODUCT_ERROR
} from "../types";

// state initial
const initialState = {
    error: null
};

export default function(state = initialState, action) {
    switch (action.type) {
        case VALIDATE_FORM_NEW_PRODUCT:
            return {
                ...state,
                error: null
            };
        case VALIDATE_FORM_NEW_PRODUCT_SUCCESS:
            return {
                ...state,
                error: null
            };
        case VALIDATE_FORM_NEW_PRODUCT_ERROR:
            return {
                ...state,
                error: true
            };
        default:
            return state;
    }
}