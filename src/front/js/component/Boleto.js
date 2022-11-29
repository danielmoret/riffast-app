import React from "react";

export const Boleto = (props) => {
  return (
    <>
      <div className="boleto mt-5">
        <div className="p-3 ms-5">
          <div className="banda-l"></div>
          <div className="logo-banda-r"></div>
          <div className="d-flex justify-content-between ms-3">
            <h1>{props.talonario.nombre}</h1>
            <h2>N° 00{props.talonario.id}</h2>
          </div>

          <div className="boleto-contenido d-flex justify-content-between">
            <div className="boleto-texto ms-3">
              <div className="fs-5 d-flex">
                <strong>Premio:</strong>
                <div className="item-talonario ms-2">
                  {props.talonario.premio}
                </div>
              </div>
              <div className="fs-5  d-flex">
                <strong>Precio: </strong>
                <div className="item-talonario ms-2">
                  {props.talonario.precio}$
                </div>
              </div>
              <div className="fs-5  d-flex">
                <strong>Loteria:</strong>
                <div className="item-talonario ms-2">
                  {props.talonario.plataforma_sorteo}
                </div>
              </div>
              <div className="fs-5  d-flex">
                <strong>Fecha:</strong>
                <div className="item-talonario ms-2">
                  {props.talonario.fecha_sorteo}
                </div>
              </div>
            </div>
            <img
              src="https://beravirtual.com/wp-content/uploads/2021/09/DSC_589-1.png"
              style={{ width: "150px", height: "150px", overflow: "hidden" }}
            ></img>
          </div>
        </div>
      </div>
    </>
  );
};
