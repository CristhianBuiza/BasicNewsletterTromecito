import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import useUser from "../hooks/useUser";
import Identity from "@arc-publishing/sdk-identity";
import "../styled-components/pagewrapper.css";

const PageWrapper = ({ children }) => {
  const urlBase = "https://api-sandbox.elcomercio.pe";
  const { isLogged, logout } = useUser();
  const [style, setStyle] = useState("");
  const [nombre, setNombre] = useState("");
  useEffect(() => {
    Identity.apiOrigin = urlBase;
  });
  useEffect(() => {
    Identity.getUserProfile().then((user) => {
      const { firstName, lastName } = user;
      setNombre(`${firstName} ${lastName}`);
    });
  }, []);

  const changeStyle = () => {
    console.log("hello");
    setStyle("cerrar");
  };
  const changeNav = () => {
    setStyle("abrir");
  };

  return (
    <>
      <header className="navigation-content">
        <div className="navigation-titulo">
          <h1>
            <Link className="navigation-link" to="/">
              Tromecito
            </Link>
          </h1>
        </div>

        <nav className="navigation-nav">
          <input type="checkbox" id="check" />
          <label htmlFor="check" className="checkLabel" onClick={changeNav}>
            <FontAwesomeIcon icon={faBars} />
          </label>

          <ul className={"navigation-links " + style}>
            <li onClick={changeStyle}>
              <Link className="navigation-link" to="/">
                Home
              </Link>
            </li>
            <li onClick={changeStyle}>
              <Link className="navigation-link" to="/about">
                About
              </Link>
            </li>

            <li>
              <span className="icono">
                <span className="navigation-link" to="/login">
                  {isLogged ? (
                    <div className="hola">
                      <p>Bienvenido,</p>
                      <p>{nombre}</p>
                    </div>
                  ) : (
                    <FontAwesomeIcon icon={faUser} />
                  )}
                </span>
              </span>
              <ul className="submenu">
                {isLogged ? (
                  <>
                    <li>
                      <Link className="navigation-link" to="/profile">
                        Perfil
                      </Link>
                    </li>
                    <li>
                      <a className="navigation-link" onClick={logout}>
                        Cerrar Sesion
                      </a>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <Link className="navigation-link" to="/login">
                        Ingresar
                      </Link>
                    </li>
                    <li>
                      <Link className="navigation-link" to="/registro">
                        Registrarse
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </li>
          </ul>
        </nav>
      </header>
      {children}

      <footer>
        <form>
          <h4>Enviame Noticias</h4>
          <input type="email" name="" id="" />
          <br />
          <input type="submit" value="Enviar" />
        </form>
        {/* copyright */}
        <div className="copyright">
          <p>© 2020 Tromecito. Todos los derechos reservados.</p>
        </div>
      </footer>
    </>
  );
};

export default PageWrapper;
