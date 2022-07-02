import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import Footer from '../Pages/Footer';
import  '../styled-components/pagewrapper.css';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import {faBars} from '@fortawesome/free-solid-svg-icons';


const PageWrapper = ({children}) => {

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
            <h1><span className="logo-title">T</span>romecito</h1>
        </div>
        

        <nav className="navigation-nav">

                    <input type="checkbox" id="check"/>
                    <label htmlFor="check" className="checkLabel" onClick={changeNav}>
                            <FontAwesomeIcon  icon={faBars} />
                    </label>

                <ul className={"navigation-links " + style}>
                    <li onClick={changeStyle}><Link className="navigation-link" to="/home">Home</Link></li>
                    <li onClick={changeStyle}><Link className="navigation-link" to="/about" >About</Link></li>
                    <li><span className="icono"><span className="navigation-link" to="/login" ><FontAwesomeIcon  icon={faUser} /></span></span>
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

    <div>
        <Footer></Footer>
    </div>
    

    </>
  )
}

export default PageWrapper
