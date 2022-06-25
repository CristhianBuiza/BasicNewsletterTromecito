import React from "react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useUser from "../hooks/useUser";
import "../styled-components/forms.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isLogingLoading, isLogingError, isLogged, login } = useUser();
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "Login | Tromecito";
  }, []);
  useEffect(() => {
    if (isLogged) {
      navigate("/");
    }
  }, [isLogged]);

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <>
      {isLogingLoading && <p>Cargando...</p>}
      {isLogingError && <p className="alert">{isLogingError}</p>}
      {!isLogingLoading && (
        <div className="login">
          <div className="login-screen">
            <div className="app-title">
              <h1>Ingresar</h1>
            </div>
            <section>
              <form
                className="login-form control-group"
                onSubmit={handleSubmit}
              >
                {/* {error && <p className="alert">{error}</p>} */}
                <input
                  type="email"
                  name="emailLogin"
                  placeholder="Ingresa tu Correo"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <br />
                <input
                  type="password"
                  name="passLogin"
                  placeholder="Ingresa tu Contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <br />

                <br />
                <button>Inciar sesión</button>
                <Link className="login-link" to="/forget/password">
                  Olvide mi contraseña
                </Link>

                <br />
                <Link className="login-link" to="/registro">
                  Registrarme
                </Link>
              </form>
            </section>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginPage;
