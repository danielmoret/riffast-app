import React from "react";
import ticketpunteado from "../../img/ticketpunteado.png";
import { Buttons } from "./Buttons";

export const VistaTickets = () => {
  return (
    <>
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
