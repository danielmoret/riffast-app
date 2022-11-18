import React from "react";
import ticketpunteado from "../../img/ticketpunteado.png";
import { Buttons } from "./Buttons";
import { Boleto } from "./Boleto";

export const VistaTickets = () => {
  return (
    <>
      <Boleto />
      <Buttons />

      <div className="d-flex justify-content-center mt-5">
        <div className="form-group m-2 select-ticket">
          <label className="form-label">
            Ingresa el número o email registrado en la rifa
          </label>
          <input className="form-control mb-3" aria-label="Default" />
          <button className="my-button rounded">Consultar</button>
        </div>
      </div>

      <div className="text-center mt-5">
        <button className="btn register p-2">
          Contactar responsable de la rifa
        </button>
      </div>

      <div className="vista-tickets d-flex justify-content-around flex-wrap gap-2">
        <div className="d-flex flex-column align-items-center">
          <div className="ticket-punteado d-flex justify-content-around align-items-center">
            <span
              style={{ color: "black", fontSize: "30px", fontWeight: "Bold" }}
            >
              00
            </span>
          </div>
          <span>
            <strong>Estatus</strong>: Por pagar
          </span>
          <button className="btn-eliminar-ticket">Eliminar</button>
        </div>

        <div className="d-flex flex-column align-items-center">
          <div className="ticket-pagado d-flex justify-content-around align-items-center">
            <span
              style={{ color: "#fed163", fontSize: "30px", fontWeight: "Bold" }}
            >
              00
            </span>
          </div>
          <span>
            <strong>Estatus</strong>: Pagado
          </span>
        </div>

        <div className="d-flex flex-column align-items-center">
          <div className="ticket-pagado d-flex justify-content-around align-items-center">
            <span
              style={{ color: "#fed163", fontSize: "30px", fontWeight: "Bold" }}
            >
              00
            </span>
          </div>
          <span>
            <strong>Estatus</strong>: Pagado
          </span>
        </div>

        <div className="d-flex flex-column align-items-center">
          <div className="ticket-pagado d-flex justify-content-around align-items-center">
            <span
              style={{ color: "#fed163", fontSize: "30px", fontWeight: "Bold" }}
            >
              00
            </span>
          </div>
          <span>
            <strong>Estatus</strong>: Pagado
          </span>
        </div>

        <div className="d-flex flex-column align-items-center">
          <div className="ticket-punteado d-flex justify-content-around align-items-center">
            <span
              style={{ color: "black", fontSize: "30px", fontWeight: "Bold" }}
            >
              00
            </span>
          </div>
          <span>
            <strong>Estatus</strong>: Por pagar
          </span>
          <button className="btn-eliminar-ticket">Eliminar</button>
        </div>
      </div>
    </>
  );
};
