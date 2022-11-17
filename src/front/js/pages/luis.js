import React from "react";
import { Navbar } from "../component/navbar";

export const Luis = () => {
    return (
        <>
        <div className="boleto mt-5">
            <div className="p-3">
                <div className="d-flex justify-content-between">
                    <h1>NombreRiffa</h1>
                    <h2 className="numero-t">N°001</h2>
                </div>
                <div className="d-flex justify-content-between">
                    <div className="">
                        <div className="fs-5 d-flex">
                            <strong>Nombre:</strong>
                                <div className="datosjugador ms-2">nombre</div>
                        </div>
                        <div className="fs-5  d-flex">
                            <strong>Premio: </strong>
                                <div className="datosjugador ms-2">premio</div>
                        </div>
                        <div className="fs-5  d-flex">
                            <strong>Precio:</strong>
                                <div className="datosjugador ms-2">precio</div>
                        </div>
                        <div className="fs-5  d-flex">
                            <strong>Fecha:</strong>
                                <div className="datosjugador ms-2"> fecha</div>
                        </div>
                    </div>

                    <div className="imagen">
                        <img className="foto" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAnOpAirjdzAleWCkpcuHNpASGfZxv6W-WYA&usqp=CAU"/>
                    </div>
                </div>
            </div>
        </div>

        <div className="container delos d-flex justify-content-center">
            <h4>disponibles</h4>

                <div className="card-group todoslostiket row">
                    <div class="card lt">
                        <img src="../../img/ticketpunteado.png" class="card-img"/>
                            <div class="card-img-overlay">
                                <h5 class="card-title">Card title</h5>
                            </div>
                    </div>
                    
                    <div class="card lt">
                        <img src="https://c8.alamy.com/compes/r0ap52/icono-de-entradas-de-cine-en-casa-de-estilo-admitir-un-cupon-entrada-ilustracion-vectorial-sobre-el-aislamiento-del-fondo-concepto-de-negocio-ticket-r0ap52.jpg" class="card-img"/>
                            <div class="card-img-overlay">
                                <h5 class="card-title">Card title</h5>
                            </div>
                    </div>

                    <div class="card lt">
                        <img src="https://c8.alamy.com/compes/r0ap52/icono-de-entradas-de-cine-en-casa-de-estilo-admitir-un-cupon-entrada-ilustracion-vectorial-sobre-el-aislamiento-del-fondo-concepto-de-negocio-ticket-r0ap52.jpg" class="card-img"/>
                            <div class="card-img-overlay">
                                <h5 class="card-title">Card title</h5>
                            </div>
                    </div>

                    <div class="card lt">
                        <img src="https://c8.alamy.com/compes/r0ap52/icono-de-entradas-de-cine-en-casa-de-estilo-admitir-un-cupon-entrada-ilustracion-vectorial-sobre-el-aislamiento-del-fondo-concepto-de-negocio-ticket-r0ap52.jpg" class="card-img"/>
                            <div class="card-img-overlay">
                                <h5 class="card-title">Card title</h5>
                            </div>
                    </div>
            </div>
        </div>
        </>
    );
  };