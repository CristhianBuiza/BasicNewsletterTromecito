import React from "react";
//navigation
import { useNavigate } from "react-router-dom";
import "../styled-components/PagoPage.css";

const PagoPage = () => {
  const navigate = useNavigate();
  const maxCvv = 3;
  const maxCardNumber = 19;
  const maxExpirationDate = 5;
  //   Numero de tarjeta
  const [cardNumber, setCardNumber] = React.useState("");

  const [cardType, setCardType] = React.useState("");
  const onSubmitHandler = (e) => {
    e.preventDefault();
    navigate("/Confirmacion");
  };
  return (
    <>
      <div id="container">
        <form id="Formulario" onSubmit={onSubmitHandler}>
          <div>
            <label htmlFor="">Nombre y Apellidos</label>
            <input type="text" placeholder="Nombre y Apellidos" required />
          </div>
          <div>
            <label htmlFor="">Numero de Tarjeta</label>
            <input
              type="text"
              placeholder="Numero de Tarjeta"
              required
              onChange={(e) => {
                const value = e.target.value;
                const newValue = value
                  .replace(/\D/g, "")
                  .replace(/([0-9]{4})/g, "$1 ")
                  .trim();
                if (newValue[0] == "4") {
                  setCardType("visa");
                }
                if (newValue[0] == "5") {
                  setCardType("mastercard");
                }
                if (newValue[0] == undefined || newValue[0] == " ") {
                  setCardType("");
                }
                setCardNumber(newValue);
              }}
              value={cardNumber}
              maxLength={maxCardNumber}
              minLength={maxCardNumber}
            />
          </div>
          <div className="media-1">
            <label htmlFor="">Fecha de Vencimiento</label>
            <input
              type="text"
              placeholder="Fecha de Vencimiento"
              required
              maxLength={maxExpirationDate}
            />
          </div>
          <div className="media-2">
            <label htmlFor="">Codigo de Seguridad</label>
            <input
              type="text"
              placeholder="Codigo de Seguridad"
              required
              maxLength={maxCvv}
            />
          </div>
          <button className="btn btn-dark"> Pagar S/. 29.90 </button>
        </form>
      </div>
      <div>
        <p>{cardNumber}</p>
        <p>{cardType}</p>
      </div>
    </>
  );
};

export default PagoPage;
