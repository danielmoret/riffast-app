import React from "react";
import { Link } from "react-router-dom";
import rifast from "../../img/rifastblue.png";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <Link to="/">
          <img src={rifast} className="logo" />
        </Link>
        <div className="ml-auto d-flex gap-2">
          <Link to="/login">
            <button className="btn login">Login</button>
          </Link>
          <Link to="/signup">
            <button className="btn  register">Registro</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
