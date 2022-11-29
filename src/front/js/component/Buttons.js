import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Buttons = (props) => {
  return (
    <div className="container text-center d-flex justify-content-evenly mt-3 ps-2">
      {/* <!-- Button trigger modal --> */}
      <button
        type="button"
        className="buyer btn btn-lg"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Comprar ticket <i className="fa-solid fa-sack-dollar fa-lg"></i>
      </button>

      {/* <!-- Modal --> */}
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
                Modal title
              </h1>

              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              ¿Has concursado en<i>Riffast</i>anteriormente?
            </div>
            <div className="modal-footer">
              <button
                type="button"

                className="yes btn btn-secondary"

            

                data-bs-dismiss="modal"
                onClick={() => props.setBuySelect("newbuy")}
              >
                No
              </button>
              <button
                type="button"

                className="no btn btn-primary"
                data-bs-dismiss="modal"
                onClick={() => props.setBuySelect("previousbuy")}
              >
                Si


              </button>
            </div>
          </div>
        </div>
      </div>

      <button
        type="button"
        className="checker btn btn-lg"
        onClick={() => props.setBuySelect("revisar")}
      >
        Mis tickets <i className="fa-solid fa-ticket fa-lg"></i>
      </button>
    </div>
  );
};
