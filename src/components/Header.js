import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between">
      <div className="container">
        <h1>
          <Link to={"/"} className="text-light">
            CRUD - React, Redux Hooks, REST API y Axios
          </Link>
        </h1>
        <Link
          to={"/products/new"}
          className="btn btn-danger nuevo-post d-block d-md-inline-block"
        >
          Añadir Producto &#43;
        </Link>
      </div>
    </nav>
  );
};

export default Header;
