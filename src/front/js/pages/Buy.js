import React, { useState } from "react";
import { Boleto } from "../component/Boleto.js";
import { Buttons } from "../component/Buttons.js";
import { VistaTickets } from "../component/VistaTickets.js";

export const Buy = () => {
  const [buySelect, setBuySelect] = useState("");

  return (
    <div>
      <Boleto />

      <Buttons setBuySelect={setBuySelect} />

      {buySelect === "comprar" ? (
        <>
          <div className="mt-5 signup form-reserva-ticket">
            <div className="form-group mb-2 select-ticket">
              <label className="form-label">Elige tu ticket</label>
              <select
                className="form-select mb-3 dropdown-ticket"
                aria-label="Default select example"
              >
                <option selected>Selecciona tu número</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
            <h3 className="text-center">Completa tus datos</h3>
            <form>
              <div className="form-group mb-2">
                <label className="form-label fw-bold">Nombre Completo</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Nombre y apellido"
                />
              </div>

              <div className="form-group mb-2 fw-bold">
                <label className="form-label">Teléfono</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="ej. 04241111111"
                />
              </div>

              <div className="form-group mb-3 fw-bold">
                <label className="form-label">Email (opcional)</label>
                <input className="form-control" type="email" />
              </div>

              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  Acepto la Política de privacidad y Condiciones de uso
                </label>
              </div>
              <input
                className="btn  w-100 btn-reserva"
                type="submit"
                value="¡Reserva ya!"
              />
            </form>
          </div>
        </>
      ) : (
        buySelect === "revisar" && (
          <>
            <div className="d-flex justify-content-center mt-5">
              <div className="form-group m-2 select-ticket">
                <label className="form-label">
                  Ingresa el número o email registrado en la rifa
                </label>
                <input className="form-control mb-3" aria-label="Default" />
                <button className="my-button rounded">Consultar</button>
              </div>
            </div>

            <VistaTickets />
          </>
        )
      )}
    </div>
  );
};
