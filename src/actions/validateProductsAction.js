import {
  VALIDATE_FORM_NEW_PRODUCT,
  VALIDATE_FORM_NEW_PRODUCT_SUCCESS,
  VALIDATE_FORM_NEW_PRODUCT_ERROR
} from "../types";

export function validateFormNewProduct() {
  return dispatch => {
    dispatch(initValidate());
  };
}

export const initValidate = () => {
  return {
    type: VALIDATE_FORM_NEW_PRODUCT
  };
};

export const validateFormNewProductSuccess = () => {
  return {
    type: VALIDATE_FORM_NEW_PRODUCT_SUCCESS
  };
};

export const validateFormNewProductError = () => {
  return {
    type: VALIDATE_FORM_NEW_PRODUCT_ERROR
  };
};
