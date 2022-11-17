import React from "react";

export const Buttons = () => {
  return (
    <div className="container text-center d-flex justify-content-evenly mt-3 ps-2">
      <button type="button" className="buyer btn-lg">
        Compra tu ticket
      </button>
      <button type="button" className="checker btn-lg d-flex flex-nowrap w-25">
        Revisar estado de mis tickets
      </button>
    </div>
  );
};
