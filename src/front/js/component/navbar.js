import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useLocation } from "react-router-dom";
import rifast from "../../img/rifastblue.png";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const location = useLocation();
  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <Link to="/">
          <img src={rifast} className="logo" />
        </Link>
        {location.pathname == `/buy/${store.talonarioSelect.id}` ? (
          <></>
        ) : !store.tokenUserTalonario ? (
          <div className="ml-auto d-flex gap-2">
            <Link to="/login" className="btn login">
              Login
            </Link>
            <Link to="/signup" className="btn  register">
              Registro
            </Link>
          </div>
        ) : (
          <div className="d-flex gap-2">
            {location.pathname == "/" ||
            location.pathname == "/raffleRegistration" ? (
              <Link to="/raffler" className="btn login">
                Rifas
              </Link>
            ) : (
              <div className="dropdown">
                <button
                  className="btn login dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Talonarios
                </button>
                <ul className="dropdown-menu dropdown-navbar px-4">
                  {store.talonarios.map((talonario) => (
                    <li
                      key={talonario.id}
                      onClick={(e) => actions.selectTalonario(talonario.id)}
                    >
                      <span className="dropdown-item dropdown-item-navbar">
                        {talonario.nombre}
                      </span>
                    </li>
                  ))}
                  <li className="text-nowrap ">
                    <Link to="/raffleRegistration" className="link-crear-rifa">
                      Crear nuevo talonario <i className="fa-solid fa-plus"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            )}
            <Link to="/">
              <button
                className="btn  register"
                onClick={() => actions.logout_talonario()}
              >
                Cerrar Sesión
              </button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};
