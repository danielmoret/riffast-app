import React from "react";

export const Buttons = () => {
  return (
    <div className="container text-center d-flex justify-content-evenly">
      <button type="button" className="buyer btn-lg">
        Compra tu ticket
      </button>
      <button type="button" className="checker btn-lg">
        Revisar estado de mis tickets
      </button>
    </div>
  );
};
