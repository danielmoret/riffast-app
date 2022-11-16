import React from "react";

export const Buy = () => {
  return (
    <div class="container container-fluid text-center p-3 mt-2 bg-primary text-black rounded">
      <div class="p-3 mt-2 bg-warning .bg-gradient text-black rounded-pill">
        Elige tu ticket
      </div>
      <span class="container d-flex justify-content-start p-1 mt-1">
        Formulario de Registro
      </span>
      <div class="bg-success boder border-success">
        <div class="row p-3 mt-2">
          <input
            class="col align-items-center"
            placeholder="Nombre y Apellido"
          ></input>
        </div>
        <div class="row p-3 mt-2">
          <input
            class="col align-items-center"
            placeholder="Número de Teléfono"
          ></input>
        </div>
        <div class="row p-3 mt-2">
          <input
            class="col align-items-center"
            placeholder="E-mail(Opcional)"
          ></input>
        </div>
      </div>
      <button type="button" class="btn btn-warning">
        ¡Reserva ya!
      </button>
    </div>
  );
};
