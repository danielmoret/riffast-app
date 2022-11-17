import React from "react";
import { Buttons } from "./Buttons.js";

export const Buy = () => {
  return (
    <div>
      <Buttons />
      <div
        className="buy container container-fluid text-center p-3 mt-2 text-black rounded"
        style={{ width: "50%" }}
      >
        <div className="spam p-3 mt-2 rounded-pill">
          Elige tu ticket
        </div>
        <span class="container d-flex justify-content-start p-1 mt-1">
          Formulario de Registro
        </span>
        <div className="buying boder border-success rounded">
          <div className="row p-3 mt-2">
            <input
              className="col align-items-center"
              placeholder="Nombre y Apellido"
            ></input>
          </div>
          <div className="row p-3 mt-2">
            <input
              className="col align-items-center"
              placeholder="Número de Teléfono"
            ></input>
          </div>
          <div className="row p-3 mt-2">
            <input
              className="col align-items-center"
              placeholder="E-mail(Opcional)"
            ></input>
          </div>
        </div>
        <button type="button" className="reservation btn m-2">
          ¡Reserva ya!
        </button>
      </div>
    </div>
  );
};
