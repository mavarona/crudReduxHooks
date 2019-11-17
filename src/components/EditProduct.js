import React, { useEffect, Fragment, useRef } from "react";

// Redux
import { useDispatch, useSelector } from "react-redux";
import {
  getProductToEditAction,
  editProductAction
} from "../actions/productsAction";
import {
  validateFormNewProduct,
  validateFormNewProductSuccess,
  validateFormNewProductError
} from "../actions/validateProductsAction";

const EditProduct = ({ match, history }) => {
  const titleRef = useRef("");
  const priceRef = useRef("");

  const dispatch = useDispatch();

  const editProduct = product => dispatch(editProductAction(product));
  const validateForm = () => dispatch(validateFormNewProduct());
  const validateFormSuccess = () => dispatch(validateFormNewProductSuccess());
  const validateFormError = () => dispatch(validateFormNewProductError());

  const { id } = match.params;

  useEffect(() => {
    dispatch(getProductToEditAction(id));
  }, [dispatch, id]);

  const product = useSelector(state => state.products.product);
  const error = useSelector(state => state.products.error);

  if (!product) return "Cargando...";

  const submitEditProduct = e => {
    e.preventDefault();
    validateForm();
    if (
      titleRef.current.value.trim() === "" ||
      priceRef.current.value.trim() === ""
    ) {
      validateFormError();
      return;
    }
    validateFormSuccess();
    editProduct({
      id,
      title: titleRef.current.value,
      price: priceRef.current.value
    });
    history.push("/");
  };

  return (
    <Fragment>
      {error ? (
        <div className="font-weight-bold alert alert-danger text-center mt-4">
          error
        </div>
      ) : (
        <div className="row justify-content-center mt-5">
          <div className="col-md-8">
            <div className="card">
              <div className="card-body">
                <h2 className="text-center">Editar Libro</h2>
                <form onSubmit={submitEditProduct}>
                  <div className="form-group">
                    <label>Título</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Título"
                      defaultValue={product.title}
                      ref={titleRef}
                    />
                  </div>
                  <div className="form-group">
                    <label>Precio del Producto</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Precio"
                      defaultValue={product.price}
                      ref={priceRef}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                  >
                    Guardar Cambios
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default EditProduct;
