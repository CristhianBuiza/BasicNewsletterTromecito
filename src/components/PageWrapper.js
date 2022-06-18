import React from 'react';
import {Link} from 'react-router-dom';
import Footer from '../Pages/Footer';
import  '../styled-components/pagewrapper.css';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser} from '@fortawesome/free-solid-svg-icons';


const PageWrapper = ({children}) => {
  return (
    <>
    <header className="navigation-content">
        <div className="navigation-titulo">
            <h1><span className="logo-title">T</span>romecito</h1>
        </div>
        <nav className="navigation-nav">
                <ul className="navigation-links">
                    <li><Link className="navigation-link" to="/home">Home</Link></li>
                    <li><Link className="navigation-link" to="/about" >About</Link></li>
                    <li><span className="icono"><Link className="navigation-link" to="/login" ><FontAwesomeIcon  icon={faUser} /></Link></span>
                        <ul className="submenu">
                            <li><Link className="navigation-link" to="/login">Ingresar</Link></li>
                            <li><Link className="navigation-link" to="#">Registrarse</Link></li>
                            <li><Link className="navigation-link" to="#">cerrar</Link></li>
                        </ul>
                    </li>
                </ul>    
        </nav>
    </header>
    {children}

    <Footer></Footer>

    </>
  )
}

export default PageWrapper
