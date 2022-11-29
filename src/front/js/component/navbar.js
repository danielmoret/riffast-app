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
        {!store.tokenUserTalonario ? (
          <div className="ml-auto d-flex gap-2">
            <Link to="/login">
              <button className="btn login">Login</button>
            </Link>
            <Link to="/signup">
              <button className="btn  register">Registro</button>
            </Link>
          </div>
        ) : (
          <div className="d-flex gap-2">
            <div className="dropdown">
              <button
                className="btn login dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Talonarios
              </button>
              <ul className="dropdown-menu">
                {store.talonarios.map((talonario) => (
                  <li
                    key={talonario.id}
                    onClick={(e) => actions.selectTalonario(talonario.id)}
                  >
                    <span className="dropdown-item" href="#">
                      {talonario.nombre}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <Link to="/">
              <button
                className="btn  register"
                onClick={() => actions.logout_talonario()}
              >
                Logout
              </button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};
