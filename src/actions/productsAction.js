import {
    ADD_PRODUCT,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_ERROR,
    INIT_DOWNLOAD_PRODUCTS,
    DOWNLOAD_PRODUCTS_SUCCESS,
    DOWNLOAD_PRODUCTS_ERROR,
    GET_PRODUCT_TO_DELETE,
    DELETE_PRODUCT_SUCCESS,
    DELETE_PRODUCT_ERROR,
    GET_PRODUCT_TO_EDIT,
    GET_PRODUCT_TO_EDIT_SUCCESS,
    GET_PRODUCT_TO_EDIT_ERROR,
    INIT_EDIT_PRODUCT,
    EDIT_PRODUCT_SUCCESS,
    EDIT_PRODUCT_ERROR
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

export function getProductToEditAction(id) {
    return dispatch => {
        dispatch(getProductToEdit());
        clientAxios.get(`/books/${id}`)
            .then(response => {
                dispatch(getProductToEditSuccess(response.data));
            })
            .catch(err => {
                dispatch(getProductToEditError(err.message));
            })
    }
}

export const getProductToEdit = () => ({
    type: GET_PRODUCT_TO_EDIT
})

export const getProductToEditSuccess = product => ({
    type: GET_PRODUCT_TO_EDIT_SUCCESS,
    payload: product
})

export const getProductToEditError = err => ({
    type: GET_PRODUCT_TO_EDIT_ERROR,
    payload: err
})

export function editProductAction(product) {
    return dispatch => {
        dispatch(initEditProduct());

        clientAxios.put(`/books/${product.id}`, product)
            .then(response => {
                dispatch(editProductSuccess(response.data));
            })
            .catch(err => {
                dispatch(editProductError(err.message));
            })
    }
}

export const initEditProduct = () => ({
    type: INIT_EDIT_PRODUCT
})

export const editProductSuccess = product => ({
    type: EDIT_PRODUCT_SUCCESS,
    payload: product
})

export const editProductError = err => ({
    type: EDIT_PRODUCT_ERROR,
    payload: err
})