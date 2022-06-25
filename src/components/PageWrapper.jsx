import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import useUser from '../hooks/useUser';
import '../styled-components/pagewrapper.css';


const PageWrapper = ({ children }) => {

    const {isLogged, logout} = useUser()
    const [style, setStyle] = useState("");
    
    const changeStyle = () => {
        console.log("hello");
        setStyle("cerrar");
    }
    const changeNav = () => {
        setStyle("abrir");
    }



    return (
        <>
            <header className="navigation-content">
                <div className="navigation-titulo">
                    <h1><Link className="navigation-link" to="/home">Tromecito</Link></h1>
                </div>


                <nav className="navigation-nav">

                    <input type="checkbox" id="check" />
                    <label htmlFor="check" className="checkLabel" onClick={changeNav}>
                        <FontAwesomeIcon icon={faBars} />
                    </label>

                    <ul className={"navigation-links " + style}>
                        <li onClick={changeStyle}><Link className="navigation-link" to="/home">Home</Link></li>
                        <li onClick={changeStyle}><Link className="navigation-link" to="/about" >About</Link></li>
                        <li><span className="icono"><span className="navigation-link" to="/login" ><FontAwesomeIcon icon={faUser} /></span></span>
                            <ul className="submenu">
                                {isLogged ? <><li><Link className="navigation-link" to="#">Perfil</Link></li><li><a className="navigation-link" onClick={logout}>Cerrar Sesion</a></li></> : <> <li><Link className="navigation-link" to="/login">Ingresar</Link></li>
                                    <li><Link className="navigation-link" to="#">Registrarse</Link></li></>}

                            </ul>
                        </li>
                    </ul>
                </nav>


            </header>
            {children}

            <footer>
                <article>
                    <form>
                        <h4>Enviame Noticias</h4>
                        <input type="email" name="" id="" />
                        <br />
                        <input type="submit" value="Enviar" />
                    </form>
                </article>
            </footer>
        </>
    )
}

export default PageWrapper
