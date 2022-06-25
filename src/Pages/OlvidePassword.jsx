import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import olvidePass from "../services/olvidePass";
const OlvidePassword = () => {
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const handleSubmit = () => {
    olvidePass(email)
      .then((res) => {
        setSuccess(true);
        setError(false);
        setTimeout(() => {
          navigate("/");
        }, 5000);
      })
      .catch((err) => {
        setError(true);
        setSuccess(false);
      });
  };
  return (
    <>
      <section>
        {success ? (
          <p className="success">
            Se ha enviado un correo para restablecer su contraseña <br />
            Se te reenviara en 5 segundos a la pagina de home
          </p>
        ) : (
          <>
            <h2>
              <p>Olvide Contraseña</p>
            </h2>
            <form onSubmit={handleSubmit}>
              {error && <p className="alert">{error}</p>}
              <input
                type="email"
                name="emailLogin"
                placeholder="Ingresa tu Correo"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <br />
              <button type="button" name="btnlogin" onClick={handleSubmit}>
                Recuperar
              </button>
            </form>
          </>
        )}
      </section>
    </>
  );
};

export default OlvidePassword;
