import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Buttons = () => {
  return (
    <div className="container text-center d-flex justify-content-evenly mt-3 ps-2">
      <Link to="/buy">
        <button type="button" className="buyer btn btn-lg">
          Compra tu ticket
        </button>
      </Link>
      <Link to="/vistaTickets">
        <button type="button" className="checker btn btn-lg">
          Revisar estado de mis tickets
        </button>
      </Link>
    </div>
  );
};
