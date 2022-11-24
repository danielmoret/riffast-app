import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import rifast from "../../img/rifastblue.png";

export const Navbar = () => {
  const { store, actions } = useContext(Context);

  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <Link to="/">
          <img src={rifast} className="logo" />
        </Link>
        {!store.token ? (
          <div className="ml-auto d-flex gap-2">
            <Link to="/login">
              <button className="btn login">Login</button>
            </Link>
            <Link to="/signup">
              <button className="btn  register">Registro</button>
            </Link>
          </div>
        ) : (
          <Link to="/">
            <button
              className="btn  register"
              onClick={() => actions.logout_talonario()}
            >
              Logout
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
};
