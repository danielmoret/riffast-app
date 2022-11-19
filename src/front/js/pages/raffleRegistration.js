import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const RaffleRegistration = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <div className="mt-5 formulario mb-5">
        <h1 className="tituloregistro text-center">Registro de rifa</h1>
        <form>
          <div className="premio mb-3">
            <label for="exampleInputEmail1" class="form-label">
              <strong>Premio:</strong>
            </label>
            <input
              type="premio"
              className="form-control"
              id="exampleInputPremio"
              aria-describedby="premio"
              placeholder="Escriba cual es el premio a entregar"
            ></input>
          </div>

          <div className="precio mb-3">
            <label for="exampleInputEmail1" class="form-label">
              <strong>Precio:</strong>
            </label>
            <div className="input-group">
              <span class="input-group-text">$</span>
              <span class="input-group-text">0.00</span>
              <input
                type="text"
                className="form-control"
                aria-label="Dollar amount (with dot and two decimal places)"
                aria-describedby="precio de la rifa"
                placeholder="Escriba el precio de la rifa en divisas ($)"
              ></input>
            </div>
          </div>

          <div className="imagen mb-3">
            <label for="formFileMultiple" className="form-label">
              <strong>Imagen del premio:</strong>
            </label>
            <input
              className="form-control"
              type="file"
              id="formFileMultiple"
              multiple
            ></input>
          </div>

          <div className="descripcion mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">
              <strong>Descripción:</strong>
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlDescripcion"
              rows="3"
              placeholder="Escriba una breve descripción de la rifa a realizar."
            ></textarea>
          </div>

          <div className="fecha mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">
              <strong>Fecha del sorteo:</strong>
            </label>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Dia"
                aria-label="Dia"
              ></input>
              <span className="input-group-text">/</span>
              <input
                type="text"
                className="form-control"
                placeholder="Mes"
                aria-label="Mes"
              ></input>
              <span className="input-group-text">/</span>
              <input
                type="text"
                className="form-control"
                placeholder="Año"
                aria-label="Año"
              ></input>
            </div>
          </div>

          <div className="plataforma mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">
              <strong>Plataforma/Medio donde se realizara el sorteo:</strong>
            </label>
            <select class="form-select" aria-label="Default select example">
              <option selected>Seleccione una plataforma/medio</option>
              <option value="1">Instagram</option>
              <option value="2">Twitter</option>
              <option value="3">Facebook</option>
              <option value="4">Youtube</option>
              <option value="5">Twitch</option>
              <option value="6">Loteria</option>
            </select>
          </div>

          <div className="metododepago mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">
              <strong>Método de pago:</strong>
            </label>
            <select class="form-select" aria-label="Default select example">
              <option selected>Seleccione un método de pago</option>
              <option value="1">Dolares en efectivo</option>
              <option value="4">Binance</option>
              <option value="2">Pago movil</option>
              <option value="5">Paypal</option>
              <option value="3">Zelle</option>
            </select>
          </div>

          <div className="d-grid gap-2">
            <button type="button" className="btn boton btn-primary btn-signup">
              Crear talonario
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
