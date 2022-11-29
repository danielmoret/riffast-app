import React, { Component } from "react";

export const Footer = () => (
  <footer className="footer text-center mt-auto">
    <div>
      <h5>TECHNOLOGIES</h5>
      <p className="iconos">
        <i className="fa-brands fa-html5 i-footer"></i>
        <i className="fa-brands fa-css3-alt i-footer"></i>
        <i className="fa-brands fa-bootstrap i-footer"></i>
        <i className="fa-brands fa-js i-footer"></i>
        <i className="fa-brands fa-react i-footer"></i>
        <i className="fa-brands fa-python i-footer"></i>
        <i className="fa-solid fa-database i-footer"></i>
        <img
          className="flask"
          src="data:image/png;base64,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"
        ></img>
      </p>
    </div>

    <div>
      <h5>LOCATION</h5>
      <p className="locationf">©4Geeks Academy | Caracas - Venezuela</p>
    </div>

    <div>
      <h5>AROUND THE WEB</h5>
      <p className="iconos">
        <i className="fa-brands fa-instagram i-footer"></i>
        <i className="fa-brands fa-twitter i-footer"></i>
        <i className="fa-brands fa-facebook i-footer"></i>
        <i className="fa-brands fa-facebook i-footer"></i>
        <i className="fa-brands fa-youtube i-footer"></i>
        <i className="fa-brands fa-twitch i-footer"></i>
      </p>
    </div>
  </footer>
);
