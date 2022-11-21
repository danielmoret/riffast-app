import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Buttons = (props) => {
  return (
    <div className="container text-center d-flex justify-content-evenly mt-3 ps-2">
      <button
        type="button"
        className="buyer btn btn-lg"
        onClick={() => props.setBuySelect("comprar")}
      >
        Compra tu ticket
      </button>

      <button
        type="button"
        className="checker btn btn-lg"
        onClick={() => props.setBuySelect("revisar")}
      >
        Revisar estado de mis tickets
      </button>
    </div>
  );
};
