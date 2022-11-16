import React from "react";

export const LeyendaNumeros = () => {
  return (
    <div className="leyenda d-flex justify-content-around align-items-center">
      <div className="d-flex flex-column align-items-center">
        <div className="numero numero_disponible">00 </div>
        <span className="fw-semibold">disponible</span>
      </div>
      <div className="d-flex flex-column align-items-center">
        <div className="numero numero_reservado">00</div>
        <span className="fw-semibold">reservado</span>
      </div>
      <div className="d-flex flex-column align-items-center">
        <div className="numero numero_pagado">00</div>
        <span className="fw-semibold">pagado</span>
      </div>
    </div>
  );
};
