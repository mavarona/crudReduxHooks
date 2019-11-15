import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

// Redux
import { useDispatch } from "react-redux";
import { deleteProductAction } from "../actions/productsAction";

const Product = ({ product }) => {
  const dispatch = useDispatch();

  const confirmDeleteProduct = id => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "Un producto eliminado no se puede recuperar",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "SI, Eliminar!",
      cancelButtonText: "Cancelar"
    }).then(result => {
      if (result.value) {
        Swal.fire(
          "Eliminado",
          "El producto se eliminó correctamente",
          "success"
        );
        dispatch(deleteProductAction(id));
      }
    });
  };

  return (
    <tr>
      <td>{product.title}</td>
      <td>
        <span className="font-weight-bold"> {product.price} €</span>
      </td>
      <td className="acciones">
        <Link
          to={`/products/edit/${product.id}`}
          className="btn btn-primary mr-2"
        >
          Editar
        </Link>

        <button
          className="btn btn-danger"
          onClick={() => confirmDeleteProduct(product.id)}
        >
          Eliminar
        </button>
      </td>
    </tr>
  );
};

export default Product;
