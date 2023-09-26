import { useState } from "react";
import "./formulario.css";

const Formulario = ({ setAlertMessage }) => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");


  const correoValido = (email) => {
    const regex =
      /^[^@]+@[^.]+\..+$/;
    return regex.test(email);
  };

  const validarInput = (e) => {
    e.preventDefault();
    if (nombre === "" || email === "" || password1 === "" || password2 === "") {
      setAlertMessage("Ninguno de los campos puede estar vacio");
    } else if (password1 !== password2) {
      setAlertMessage("Las contraseñas no coinciden");
    } else if (correoValido(email) !== true) {
      setAlertMessage("El correo no es valido.");
    } else {
      setAlertMessage("Datos enviados correctamente.");
      setNombre("");
      setEmail("");
      setPassword1("");
      setPassword2("");
    }
  };

  return (
    <>
      <form onSubmit={validarInput}>
        <div className="form-group">
          <div>
            <input
              className="form-control"
              name="Nombre"
              placeholder="Nombre"
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>
          <div>
            <input
              className="form-control"
              name="Email"
              placeholder="tuemail@ejemplo.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <input
              className="form-control"
              name="Password1"
              placeholder="Contraseña"
              onChange={(e) => setPassword1(e.target.value)}
            />
          </div>
          <div>
            <input
              className="form-control"
              name="Password2"
              placeholder="Confirma tu contraseña"
              onChange={(e) => setPassword2(e.target.value)}
            />
          </div>
          <button className="btn btn-primary mt-4 w-50" type="submit">
            {" "}
            Registrate
          </button>
        </div>
      </form>
    </>
  );
};

export default Formulario;
