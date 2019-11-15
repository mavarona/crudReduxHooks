import React, { useState } from "react";

// Redux
import { createNewProductAction } from "../actions/productsAction";
import {
  validateFormNewProduct,
  validateFormNewProductSuccess,
  validateFormNewProductError
} from "../actions/validateProductsAction";
import { useDispatch, useSelector } from "react-redux";

const NewProduct = ({ history }) => {
  // State
  const [title, saveTitle] = useState("");
  const [price, savePrice] = useState("");

  // Create new product
  const dispatch = useDispatch();
  const addProduct = product => dispatch(createNewProductAction(product));
  const validateForm = () => dispatch(validateFormNewProduct());
  const validateFormSuccess = () => dispatch(validateFormNewProductSuccess());
  const validateFormError = () => dispatch(validateFormNewProductError());

  // Get data from state
  const error = useSelector(state => state.error.error);

  // Add new product
  const submitNewProduct = e => {
    e.preventDefault();

    validateForm();
    // Validate Form
    if (title.trim() === "" || price.trim() === "") {
      validateFormError();
      return;
    }
    validateFormSuccess();
    addProduct({ title, price });
    history.push("/");
  };

  return (
    <div className="row justify-content-center mt-5">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold ">
              Agregar Nuevo Libro
            </h2>
            <form onSubmit={submitNewProduct}>
              <div className="form-group">
                <label> Título Libro </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Título Libro"
                  value={title}
                  onChange={e => saveTitle(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label> Precio Libro </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Precio Libro"
                  value={price}
                  onChange={e => savePrice(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
              >
                Nuevo
              </button>
            </form>
            {error ? (
              <div className="font-weight-bold alert alert-danger text-center mt-4">
                Todos los campos son obligatorios
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProduct;
