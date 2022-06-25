import React, { useState, useEffect } from "react";
import "../styled-components/forms.css";
import { useNavigate, Link } from "react-router-dom";

import olvidePass from "../services/olvidePass";
const OlvidePassword = () => {
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "Olvide Contraseña | Tromecito";
  }, []);
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
          <div className="login">
            <div className="login-screen">
              <article>
                <p>Olvide Contraseña</p>
                <br />
              </article>
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
                <Link className="login-link" to="/">
                  Regresar a inicio
                </Link>
              </form>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default OlvidePassword;
