import React from "react";

//navigation
import { useNavigate } from "react-router-dom";
import "../styled-components/PagoPage.css";
import "../styled-components/tarjeta.css";

const PagoPage = () => {
  const navigate = useNavigate();
  const maxCvv = 3;
  const maxCardNumber = 19;
  const maxExpirationDate = 5;

  //   Numero de tarjeta
  const [cardNumber, setCardNumber] = React.useState("");
  const [NombresCompletos, setNombresCompletos] = React.useState("");
  const [ExpirationDate, setExpirationDate] = React.useState("");
  const [Cvv, setCvv] = React.useState("");
  const [cardType, setCardType] = React.useState("");
  const onSubmitHandler = (e) => {
    e.preventDefault();
    navigate("/Confirmacion");
  };

  const onChangeHandlerCard = (e) => {
    const value = e.target.value;
    const newValue = value
      .replace(/\D/g, "")
      .replace(/([0-9]{4})/g, "$1 ")
      .trim();
    if (newValue[0] == "4") {
      setCardType("Visa");
    }
    if (newValue[0] == "5") {
      setCardType("Mastercard");
    }
    if (newValue[0] == undefined || newValue[0] == " ") {
      setCardType("");
    }
    setCardNumber(newValue);
  };

  return (
    <>
      <div id="container">
        <section id="card" class="card">
          <div className="front-card">
            <div id="logo-card" className="logo-card">
              {cardType}
            </div>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/fire-fotos-8e3f9.appspot.com/o/img%2Fchip-tarjeta.png?alt=media&token=489dc6be-d75d-47db-b544-e7020041cc90"
              alt="Chip"
              title="Chip"
              className="chip"
              sizes="(max-width: 500px) 100vw, 500px"
            />

            <div className="info-card-front">
              <div id="group-number-card" className="group-number-card">
                <p className="label-card">Número Tarjeta</p>

                <p className="number-card">
                  {cardNumber ? cardNumber : "#### ##### #### ####"}
                </p>
              </div>

              <div className="flexbox">
                <div id="group-name-card" className="group-name-card">
                  <p className="label-card">Nombre Tarjeta</p>

                  <p className="name-card">
                    {NombresCompletos ? NombresCompletos : "Nombres"}
                  </p>
                </div>

                <div
                  id="group-expiration-card"
                  className="group-expiration-card"
                >
                  <p className="label-card">Expiración</p>

                  <p className="expiration-card">
                    <span className="mounth-expiration-card">
                      {ExpirationDate ? ExpirationDate : "DD/MM"}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <form id="Formulario" onSubmit={onSubmitHandler}>
          <div>
            <label htmlFor="">Nombre y Apellidos</label>
            <input
              type="text"
              placeholder="Nombre y Apellidos"
              onChange={(e) => setNombresCompletos(e.target.value)}
              value={NombresCompletos}
              required
            />
          </div>
          <div>
            <label htmlFor="">Numero de Tarjeta</label>
            <input
              type="text"
              placeholder="Numero de Tarjeta"
              required
              onChange={onChangeHandlerCard}
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
              onChange={(e) => setExpirationDate(e.target.value)}
              value={ExpirationDate}
              required
              maxLength={maxExpirationDate}
            />
          </div>
          <div className="media-2">
            <label htmlFor="">Codigo de Seguridad</label>
            <input
              type="text"
              placeholder="Codigo de Seguridad"
              onChange={(e) => setCvv(e.target.value)}
              value={Cvv}
              required
              maxLength={maxCvv}
            />
          </div>
          <button className="btn btn-dark"> Pagar S/. 29.90 </button>
        </form>
      </div>
      <div>
        <p>{cardType}</p>
      </div>
    </>
  );
};

export default PagoPage;
