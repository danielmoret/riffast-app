import React from "react";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <div className="mt-5 signup">
      <h1 className="text-center">Bienvenido</h1>
      <form>
        <div className="form-group mb-2">
          <label className="form-label fw-bold">Email o teléfono</label>
          <input className="form-control" type="email" />
        </div>

        <div className="form-group mb-2">
          <label className="form-label fw-bold">Contraseña</label>
          <input className="form-control" type="password" />
        </div>

        <input
          className="btn btn-primary w-100 btn-signup"
          type="submit"
          value="Ingresa ya!"
        />
        <div className="text-center mt-2">
          ¿No tienes cuenta?&nbsp;
          <Link
            to="/signup"
            style={{ textDecoration: "none", color: "#293250" }}
          >
            <strong>Registrate</strong>
          </Link>
        </div>
      </form>
    </div>
  );
};
