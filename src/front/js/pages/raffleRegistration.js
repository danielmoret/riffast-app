import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import CloudinaryUploadWidget from "../component/UploadImage";
import "../../styles/home.css";

export const RaffleRegistration = () => {
  const { store, actions } = useContext(Context);
  const [nombre, setNombre] = useState("");
  const [premio, setPremio] = useState("");
  const [precio, setPrecio] = useState("");
  const [img, setImg] = useState({});
  const [descripcion, setDescripcion] = useState("");
  const [fecha, setFecha] = useState("");
  const [plataforma, setPlataforma] = useState("");
  const [metodoPago, setMetodoPago] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setImg(store.imageUrls);
  }, [store.imageUrls]);

  const sendData = (event) => {
    event.preventDefault();
    if (
      nombre != "" &&
      premio != "" &&
      precio != "" &&
      img.url != undefined &&
      descripcion != "" &&
      fecha != "" &&
      plataforma != "" &&
      metodoPago != ""
    ) {
      actions.crear_talonario(
        nombre,
        premio,
        precio,
        img.url,
        descripcion,
        fecha,
        plataforma,
        metodoPago
      );
      navigate("/raffler");
      store.imageUrls = {};
    }
  };

  return (
    <>
      <div className="mt-5 mb-5 formulario min-vh-100">
        <h1 className="tituloregistro text-center">Registro de rifa</h1>

        <form onSubmit={sendData}>
          <div className="nombre mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              <strong>Nombre de la rifa:</strong>
            </label>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value={nombre}
                onChange={(event) => setNombre(event.target.value)}
              ></input>
            </div>
          </div>

          <div className="premio mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              <strong>Premio:</strong>
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPremio"
              aria-describedby="premio"
              placeholder="Escriba cual es el premio a entregar"
              value={premio}
              onChange={(event) => setPremio(event.target.value)}
            ></input>
          </div>

          <div className="precio mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              <strong>Precio:</strong>
            </label>
            <div className="input-group">
              <span className="input-group-text">$</span>
              <span className="input-group-text">0.00</span>
              <input
                type="text"
                className="form-control"
                aria-label="Dollar amount (with dot and two decimal places)"
                aria-describedby="precio de la rifa"
                placeholder="Escriba el precio de la rifa en divisas ($)"
                value={precio}
                onChange={(event) => setPrecio(event.target.value)}
              ></input>
            </div>
          </div>

          <div className="imagen mb-3">
            <label htmlFor="formFileMultiple" className="form-label">
              <strong>Imagen del premio:</strong>
            </label>
            <div className="text-center mt-5 ">
              {Object.entries(store.imageUrls).length > 0 && (
                <div>
                  <img src={store.imageUrls.thumbnail}></img>
                </div>
              )}
              <CloudinaryUploadWidget />
            </div>
          </div>

          <div className="descripcion mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              <strong>Descripción:</strong>
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlDescripcion"
              rows="3"
              placeholder="Escriba una breve descripción de la rifa a realizar."
              value={descripcion}
              onChange={(event) => setDescripcion(event.target.value)}
            ></textarea>
          </div>

          <div className="fecha mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              <strong>Fecha del sorteo:</strong>
            </label>
            <div className="input-group">
              <input
                type="date"
                className="form-control"
                placeholder="Dia"
                value={fecha}
                onChange={(event) => setFecha(event.target.value)}
              ></input>
            </div>
          </div>

          <div className="plataforma mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              <strong>Plataforma/Medio donde se realizara el sorteo:</strong>
            </label>
            <select
              className="form-select"
              aria-label="Default select example"
              value={plataforma}
              onChange={(event) => setPlataforma(event.target.value)}
            >
              <option>Seleccione una plataforma/medio</option>
              <option value="instagram">Instagram</option>
              <option value="twitter">Twitter</option>
              <option value="facebook">Facebook</option>
              <option value="youtube">Youtube</option>
              <option value="twitch">Twitch</option>
              <option value="loteria">Loteria</option>
            </select>
          </div>

          <div className="metododepago mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              <strong>Método de pago:</strong>
            </label>
            <select
              className="form-select"
              aria-label="Default select example"
              value={metodoPago}
              onChange={(event) => setMetodoPago(event.target.value)}
            >
              <option>Seleccione un método de pago</option>
              <option value="$">Dolares en efectivo</option>
              <option value="binance">Binance</option>
              <option value="pago movil">Pago movil</option>
              <option value="paypal">Paypal</option>
              <option value="zelle">Zelle</option>
            </select>
          </div>

          <div className="d-grid gap-2">
            <button type="submit" className="btn boton btn-primary btn-signup">
              Crear talonario
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
