import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import homeImage from "../../img/landingHome.png";
import "../../styles/home.css";

export const Home = () => {
  return (
    <>
      <div className="d-flex align-items-center landing">
        <div className="content-overlay">
          <div className="text-overlay">
            Olvida ya esos talonarios de papel.&nbsp;
            <span style={{ color: "#6dd47e" }}>
              Crea, administra y comparte tu talonario virtual &nbsp;
            </span>
            con nosotros
          </div>
          <Link to="/signup">
            <button className="button-overlay btn btn-success mt-4">
              ¡Crea tu rifa ya!
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};
