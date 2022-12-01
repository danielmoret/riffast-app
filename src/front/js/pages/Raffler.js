import React, { useContext, useEffect, useState } from "react";
import { LeyendaNumeros } from "../component/LeyendaNumeros";
import { Boleto } from "../component/Boleto";
import { BtnCompartir } from "../component/BtnCompartir";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const Raffler = () => {
  const { store, actions } = useContext(Context);
  const [ticketSeleccionado, setTicketSeleccionado] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    if (!store.tokenUserTalonario) navigate("/login");
  }, []);

  useEffect(() => {
    if (
      store.tokenUserTalonario &&
      store.tokenUserTalonario !== "" &&
      store.tokenUserTalonario !== undefined
    ) {
      actions.obtenerTalonario();
    }
  }, [store.tokenUserTalonario]);

  useEffect(() => {
    if (store.talonarios.length > 0) {
      actions.selectTalonario(store.talonarios[0].id);
    }
  }, [store.talonarios]);

  useEffect(() => {
    actions.numberFilter(store.ticketsReservados);
  }, [store.ticketsReservados]);

  useEffect(() => {
    if (store.talonarioSelect.constructor === Object) {
      actions.getTickets(store.talonarioSelect.id);
    }
  }, [store.talonarioSelect]);

  const deleteTicket = (numeroTicket, talonarioId) => {
    actions.deleteTicket(numeroTicket, talonarioId);
    console.log(numeroTicket, talonarioId);
  };

  const updateStatusToPaid = (numeroTicket, talonarioId) => {
    actions.updateStatusToPaid(numeroTicket, talonarioId);
  };

  return (
    <>
      {store.talonarios.length > 0 ? (
        <>
          <Boleto talonario={store.talonarioSelect} />
          <BtnCompartir talonarioID={store.talonarioSelect.id} />
          <div className="text-center mt-5 mb-5">
            <h1>Tickets</h1>
            <LeyendaNumeros />
            <div className="talonario d-flex flex-wrap justify-content-center p-2 gap-2">
              {store.tickets.map((numero, index) => (
                <div
                  value={`${numero.status} ${numero.value}`}
                  key={index}
                  className={
                    numero.status == "reservado"
                      ? "numero_reservado numero"
                      : numero.status == "pagado"
                      ? "numero_pagado numero"
                      : "numero numero_disponible"
                  }
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  onClick={(e) =>
                    setTicketSeleccionado({
                      value: numero.value,
                      numero: numero.numero,
                      status: numero.status,
                    })
                  }
                >
                  {numero.value}
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        <Link to="/raffleRegistration" className="btn boton btn-primary btn-signup">Crear nuevo talonario</Link>
      )}

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Ticket {ticketSeleccionado.value}
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
                <strong>Estado:</strong> {ticketSeleccionado.status}
              </span>
              {ticketSeleccionado.status !== "disponible" && (
                <button
                  className="btn btn-outline-dark btn-closed"
                  data-bs-target="#exampleModalToggle2"
                  data-bs-toggle="modal"
                  onClick={(e) =>
                    actions.infoTicket(
                      ticketSeleccionado.numero,
                      store.talonarioSelect.id
                    )
                  }
                >
                  Ver datos del participante
                </button>
              )}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-outline-dark btn-closed"
                data-bs-dismiss="modal"
              >
                Volver
              </button>

              {ticketSeleccionado.status == "reservado" && (
                <button
                  type="button"
                  className="btn btn-success btn-liberar"
                  data-bs-dismiss="modal"
                  onClick={(e) =>
                    deleteTicket(
                      ticketSeleccionado.numero,
                      store.talonarioSelect.id
                    )
                  }
                >
                  Liberar Ticket
                </button>
              )}

              {ticketSeleccionado.status == "reservado" && (
                <button
                  type="button"
                  className="btn btn-primary register"
                  data-bs-dismiss="modal"
                  onClick={(e) =>
                    updateStatusToPaid(
                      ticketSeleccionado.numero,
                      store.talonarioSelect.id
                    )
                  }
                >
                  Marcar como pagado
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      {/*Segundo modal */}
      <div
        className="modal fade"
        id="exampleModalToggle2"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel2"
        tabIndex={-1}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalToggleLabel2">
                Información del ticket {ticketSeleccionado.value}
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="d-flex flex-column">
                <span>
                  <strong>Nombre: {store.infoTicket.full_name}</strong>
                </span>
                <span>
                  <strong>Teléfono: {store.infoTicket.phone}</strong>
                </span>
                <span>
                  <strong>Email: {store.infoTicket.email}</strong>
                </span>
              </div>
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-outline-dark btn-closed"
                data-bs-target="#exampleModalToggle"
                data-bs-toggle="modal"
              >
                Volver
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
