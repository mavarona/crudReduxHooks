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

import clientAxios from "../config/axios";

export function createNewProductAction(product) {
    return dispatch => {
        dispatch(newProduct());
        // Insert Api
        clientAxios
            .post("/books", product)
            .then(response => {
                dispatch(addProductSuccess(response.data));
            })
            .catch(err => dispatch(addProductError(err.message)));
    };
}

export const newProduct = () => ({
    type: ADD_PRODUCT
});

export const addProductSuccess = product => ({
    type: ADD_PRODUCT_SUCCESS,
    payload: product
});

export const addProductError = err => ({
    type: ADD_PRODUCT_ERROR,
    payload: err
});

export function getProductsAction() {
    return dispatch => {
        dispatch(getProductsInit());
        clientAxios.get('/books')
            .then(response => {
                dispatch(getProductsSuccess(response.data));
            })
            .catch(err => {
                dispatch(getProductsError(err.message));
            })
    }
}

export const getProductsInit = () => ({
    type: INIT_DOWNLOAD_PRODUCTS
})

export const getProductsSuccess = products => ({
    type: DOWNLOAD_PRODUCTS_SUCCESS,
    payload: products
})

export const getProductsError = err => ({
    type: DOWNLOAD_PRODUCTS_ERROR,
    payload: err
})

export function deleteProductAction(id) {
    return dispatch => {
        dispatch(getProductToDelete());
        clientAxios.delete(`/books/${id}`)
            .then(respuesta => {
                dispatch(deleteProductSuccess(id));
            })
            .catch(error => {
                dispatch(deleteProductError());
            })

    }
}

export const getProductToDelete = () => ({
    type: GET_PRODUCT_TO_DELETE
})

export const deleteProductSuccess = id => ({
    type: DELETE_PRODUCT_SUCCESS,
    payload: id
})

export const deleteProductError = () => ({
    type: DELETE_PRODUCT_ERROR
})