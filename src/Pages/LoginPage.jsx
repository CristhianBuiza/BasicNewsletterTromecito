import React from 'react'
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useUser from '../hooks/useUser'

const LoginPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {isLogingLoading, isLogingError, isLogged, login} = useUser()
    const navigate = useNavigate()
    useEffect(() => {
      if(isLogged){
        navigate('/home')
      }
    }, [isLogged])
    
    const handleSubmit = (e) => {
        e.preventDefault();
        login(email, password);
        //navigate('/home')
    }

    return (
        <>
            {isLogingLoading && <p>Cargando...</p>}
            {isLogingError && <p className="alert">{isLogingError}</p>}
            {!isLogingLoading && <>
            <header className="App-header">
                <p>Ingresar</p>
            </header>
            <section>
                
                
                <form onSubmit={handleSubmit}>
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
                    <button>
                        Inciar sesión
                    </button>
                    <Link to='/forget/password'>Olvide mi contraseña</Link>

                    <br />
                    <Link to='/register'>Registrarme</Link>
                </form>
               
            </section>
            </>}
        </>
    )
}

export default LoginPage