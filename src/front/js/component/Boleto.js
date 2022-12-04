import { useContext, useState } from "react";
import React from "react";
import { Context } from "../store/appContext";
import CloudinaryUploadWidget from "./UploadPhoto";

export const Boleto = (props) => {
  const [imageUrl, setImageUrl] = useState("");
  const {store, actions} = useContext(Context);
  
  return (
    <>
      <div className="boleto mt-5 mb-2">
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
                <strong>Plataforma:</strong>
                <div className="item-talonario ms-2">
                  {props.talonario.plataforma_sorteo}
                </div>
              </div>
              <div className="fs-5  d-flex">
                <strong>Fecha:</strong>
                <div className="item-talonario ms-2 w-100">
                  {new Date(props.talonario.fecha_sorteo).toLocaleDateString()}
                </div>
              </div>
            </div>
            <img
              style={{ imageUrl: store.imageUrl, width: "150px", height: "150px", overflow: "hidden" }}
            ></img>
          </div>
        </div>
      </div>
    </>
  );
};
