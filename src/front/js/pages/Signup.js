import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const Signup = () => {
  const { store, actions } = useContext(Context);
  const [fullname, setFullname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const sendData = (event) => {
    event.preventDefault();
    actions.signup_talonario(fullname, email, phone, password);
    if (fullname != "" && email != "" && phone != "" && password != "")
      navigate("/login");
  };

  return (
    <div className="mt-5 signup min-vh-100">
      <h1 className="text-center">Registrate para crear tu rifa</h1>
      <form onSubmit={sendData}>
        <div className="form-group mt-4 mb-3">
          <label className="form-label fw-bold">Nombre Completo</label>
          <input
            className="form-control"
            type="text"
            value={fullname}
            onChange={(event) => setFullname(event.target.value)}
          />
        </div>

        <div className="form-group mb-3">
          <label className="form-label fw-bold">Email</label>
          <input
            className="form-control"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>

        <div className="form-group mb-3">
          <label className="form-label fw-bold">Teléfono</label>
          <input
            className="form-control"
            type="text"
            placeholder="04241111111"
            value={phone}
            onChange={(event) => setPhone(event.target.value.trim())}
          />
        </div>

        <div className="form-group mb-3">
          <label className="form-label fw-bold">Contraseña</label>
          <input
            className="form-control"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value.trim())}
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Acepto la Política de privacidad y Condiciones de uso
          </label>
        </div>
        <input
          className="btn btn-primary w-100 btn-signup"
          type="submit"
          value="Registrate"
        />
      </form>
    </div>
  );
};
