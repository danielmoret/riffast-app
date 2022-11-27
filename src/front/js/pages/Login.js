import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Login = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  console.log("This is your token", store.tokenUserTalonario);

  const sendData = (event) => {
    event.preventDefault();
    actions.login_talonario(email, password);
  };

  if (
    store.tokenUserTalonario &&
    store.tokenUserTalonario !== "" &&
    store.tokenUserTalonario !== undefined
  ) {
    navigate("/raffler");
  }

  return (
    <div className="mt-5 signup min-vh-100">
      <h1 className="text-center">Bienvenido</h1>
      {store.tokenUserTalonario &&
      store.tokenUserTalonario != "" &&
      store.tokenUserTalonario != undefined ? (
        "You are logged in with this token " + store.tokenUserTalonario
      ) : (
        <form onSubmit={sendData}>
          <div className="form-group mb-2">
            <label className="form-label fw-bold">Email o teléfono</label>
            <input
              className="form-control"
              type="text"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>

          <div className="form-group mb-2">
            <label className="form-label fw-bold">Contraseña</label>
            <input
              className="form-control"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>

          <input
            className="btn btn-primary w-100 btn-signup"
            type="submit"
            value="¡Ingresa ya!"
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
      )}
    </div>
  );
};
