import React, { useEffect } from "react";

// Components
import Product from "./Product";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { getProductsAction } from "../actions/productsAction";

const Products = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const loadProducts = () => dispatch(getProductsAction());
    loadProducts();
  }, []);

  const loading = useSelector(state => state.products.loading);
  const error = useSelector(state => state.products.error);
  const products = useSelector(state => state.products.products);

  return (
    <React.Fragment>
      {error ? (
        <div className="font-weight-bold alert alert-danger text-center mt-4">
          error
        </div>
      ) : (
        <React.Fragment>
          <h2 className="text-center my-5"> Listado de Productos </h2>
          <table className="table table-striped">
            <thead className="bg-primary table-dark">
              <tr>
                <th scope="col"> Título </th>
                <th scope="col"> Precio </th>
                <th scope="col"> Acciones </th>
              </tr>
            </thead>
            <tbody>
              {products.map(product => (
                <Product key={product.id} product={product} />
              ))}
            </tbody>
          </table>
          {loading ? "Cargando..." : null}
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default Products;
