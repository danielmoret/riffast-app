import React from "react";

export const Boleto = () => {
    return (
        <>
        <div className="boleto mt-5">
            <div className="p-3 ms-5">
                <div className="bada-l"></div>
                <div className="logo-banda-r"></div>
                    <div className="d-flex justify-content-between">
                        <h1>TALONARIO</h1>
                        <h2>N° 000</h2>
                    </div>
                    <div className="fs-5 d-flex">
                        <strong>Premio:</strong>
                            <div className="item-talonario ms-2"> {props.talonario.premio}</div>
                    </div>
                    <div className="fs-5  d-flex">
                        <strong>Precio: </strong>
                            <div className="item-talonario ms-2">{props.talonario.precio}</div>
                    </div>
                    <div className="fs-5  d-flex">
                        <strong>Loteria:</strong>
                            <div className="item-talonario ms-2">{props.talonario.plataformaSorteo}</div>
                    </div>
                    <div className="fs-5  d-flex">
                        <strong>Fecha:</strong>
                            <div className="item-talonario ms-2"> {props.talonario.fecha}</div>
                    </div>
            </div>
        </div>
        </>
    );
  };