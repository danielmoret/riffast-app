import React from "react";

export const Signup = () => {
  return (
    <div className="mt-5 signup">
      <h1 className="text-center">Registrate para crear tu rifa</h1>
      <form>
        <div className="form-group">
          <label className="form-label">Nombre Completo</label>
          <input className="form-control" type="text" />
        </div>

        <div className="form-group">
          <label className="form-label">Email</label>
          <input className="form-control" type="email" />
        </div>

        <div className="form-group">
          <label className="form-label">Teléfono</label>
          <input
            className="form-control"
            type="text"
            placeholder="04241111111"
          />
        </div>

        <div className="form-group">
          <label className="form-label">Contraseña</label>
          <input className="form-control" type="password" />
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