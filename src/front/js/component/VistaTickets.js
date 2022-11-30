import React from "react";

export const VistaTickets = (props) => {
  console.log(props);
  return (
    <>
      <div className="text-center mt-5">
        <button className="btn register p-2">
          Contactar responsable de la rifa
        </button>
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
                <button className="btn-eliminar-ticket btn">Eliminar</button>
              </div>
            );
          }
        })}
      </div>
    </>
  );
};
