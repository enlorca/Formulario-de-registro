import React, { useState } from "react";
import "./Registro.css";

import Formulario from "../Formulario/Formulario";
import Alert from "../Alert/Alert";
import SocialButton from "../SocialButton/SocialButton";

const Registro = () => {
  const [alertMessage, setAlertMessage] = useState("");

  return (
    <div>
      <h1>Crea una cuenta</h1>
      <SocialButton
      icon1 = {<i className="fa-brands fa-facebook fa-2xl"></i>}
      icon2 = {<i className="fa-brands fa-github fa-2xl"></i>}
      icon3 = {<i className="fa-brands fa-linkedin fa-2xl"></i>} />
      <p>O usa tu email para registrarte</p>
      <Formulario setAlertMessage={setAlertMessage} />
      <Alert message={alertMessage} />
    </div>
  );
};

export default Registro;
