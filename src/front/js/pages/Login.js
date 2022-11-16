import React from "react";

export const Login = () => {
  return (
    <div className="mt-5 signup">
      <h1 className="text-center">Bienvenido</h1>
      <form>
        <div className="form-group">
          <label className="form-label">Email o teléfono</label>
          <input className="form-control" type="email" />
        </div>

        <div className="form-group">
          <label className="form-label">Contraseña</label>
          <input className="form-control" type="password" />
        </div>

        <input
          className="btn btn-primary w-100 btn-signup"
          type="submit"
          value="Ingresa ya!"
        />
        <div className="text-center">
          ¿No tienes cuenta? <strong>Registrate</strong>
        </div>
      </form>
    </div>
  );
};
