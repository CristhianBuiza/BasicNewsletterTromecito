import React, { useEffect, useState } from "react";
import Identity from "@arc-publishing/sdk-identity";
import { AiFillCheckCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import "../styled-components/confirmation.css";
const ConfirmacionPage = () => {
  const urlBase = "https://api-sandbox.elcomercio.pe";
  const navigate = useNavigate();
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
  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 10000);
  }, []);
  return (
    <div id="container">
      <AiFillCheckCircle className="icon" size={70} />
      <h4>
        Bienvenido {nombre} <br />
        has adquirido el
      </h4>

      <h5>
        Producto <br />
        <br /> S/.29.90
      </h5>
      <h4>Gracias por tu compra</h4>
      <p>Seras Redirigido en 10 segundos al home</p>
    </div>
  );
};

export default ConfirmacionPage;
