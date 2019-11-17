import React from "react";
import CollabCode from "../../img/logo.svg";
import CollabCodeLight from "../../img/logo-light.svg";

const LogoCollab = ({ light = false }) => (
  <img
    className="logo-collab"
    src={light ? CollabCodeLight : CollabCode}
    alt="Logo da CollabCode"
  />
);

export default LogoCollab;
