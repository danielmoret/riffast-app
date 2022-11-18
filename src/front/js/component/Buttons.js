import React, { useState } from "react";
import { Buy } from "./Buy";
import { VistaTickets } from "./VistaTickets";

export const Buttons = () => {
  const [tabIndex, setTabIndex] = useState();

  function Update(){
    const [tabIndex, setTabIndex] = useState(1);
  }

  return (
    <div className="container text-center d-flex justify-content-evenly mt-3 ps-2">
      <button onClick={()=>setTabIndex(1)} type="button" className="buyer btn-lg">
        Compra tu ticket
      </button>
      <button onClick={()=>setTabIndex(2)} type="button" className="checker btn-lg d-flex flex-nowrap w-25">
        Revisar estado de mis tickets
      </button>
      {
        tabIndex === 1 || (
          <Buy />
        )
      }
      {
        tabIndex === 2 || (
          <VistaTickets />
        )
      }
    </div>
  );
};
