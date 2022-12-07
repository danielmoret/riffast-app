import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const VistaTickets = (props) => {
  const { store, actions } = useContext(Context);

  const deleteTicket = (numeroTicket, talonarioId) => {
    actions.deleteTicket(numeroTicket, talonarioId);
  };
  return (
    <>
      <div className="text-center mt-5">
        {/* Button trigger modal */}
        <button
          type="button"
          className="btn register p-2"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal1"
        >
          Contactar responsable de la rifa
        </button>
      </div>

      {/* Modal */}
      <div
        className="modal fade"
        id="exampleModal1"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Datos del responsable de la rifa
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body d-flex flex-column">
              <span>
                <strong>Nombre: </strong>
                {props.userData.full_name}
              </span>
              <span>
                <strong>Teléfono: </strong>
                {props.userData.phone}
              </span>
              <span>
                <strong>Email: </strong>
                {props.userData.email}
              </span>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn login"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="vista-tickets d-flex justify-content-around flex-wrap gap-2 mt-3">
        {props.tickets.map((ticket) => {
          if (ticket.user_ticket_id == props.userID) {
            return (
              <div
                className="d-flex flex-column align-items-center"
                key={`${ticket.numero} ${ticket.talonario_id}`}
              >
                <div
                  className={`${
                    ticket.status === "reservado"
                      ? "ticket-punteado"
                      : "ticket-pagado"
                  } d-flex justify-content-around align-items-center`}
                >
                  <span
                    className={
                      ticket.status === "reservado"
                        ? "numero-ticket-no-pagado"
                        : "numero-ticket-pagado"
                    }
                  >
                    {ticket.numero}
                  </span>
                </div>
                <span>
                  <strong>Estatus</strong>: {ticket.status}
                </span>
                {ticket.status == "reservado" && (
                  <button
                    className="btn-eliminar-ticket btn"
                    onClick={(e) =>
                      deleteTicket(ticket.numero, ticket.talonario_id)
                    }
                  >
                    Eliminar
                  </button>
                )}
              </div>
            );
          }
        })}
      </div>
    </>
  );
};
