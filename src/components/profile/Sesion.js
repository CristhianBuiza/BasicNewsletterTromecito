// import React, { useState, useEffect } from "react";
// import Identity from "@arc-publishing/sdk-identity";
// import Perfil from "../profile/Perfil";
// import Login from "../../services/login";
// import OlvidePass from "../../services/olvidePass";
// import Registro from "../../services/Registro";
// import LoginPage from "../../Pages/LoginPage";
// const Sesion = () => {
//   const urlBase = "https://api-sandbox.elcomercio.pe";
//   const [islogged, setIsLogged] = useState(false);
//   const [showRegistro, setShowRegistro] = useState(false);
//   const [showOlvide, setShowOlvide] = useState(false);

//   useEffect(() => {
//     Identity.apiOrigin = urlBase;
//     handleLogged();
//   });

// const handleLogged = () => {
//   Identity.isLoggedIn()
//     .then((res) => {
//       if (res === true) {
//         setIsLogged(true);
//       }
//     })
//     .catch((err) => {
//       console.log("Oops algo falló", err);
//     });
// };

//   const handleShowRegister = () => {
//     setShowRegistro(!showRegistro);
//     if (showOlvide) {
//       setShowOlvide(false);
//     }
//   };

//   const handleShowOlvide = () => {
//     setShowOlvide(!showOlvide);
//   };

//   const handleCloseSession = () => {
//     Identity.logout().then((res) => {
//       setIsLogged(false);
//     });
//   };

//   let userprofile = {};

//   return (
//     <section>
//       <LoginPage></LoginPage>
//       {islogged ? (
//         <Perfil
//           handleCloseSession={handleCloseSession}
//           userprofile={userprofile}
//         />
//       ) : (
//         <Login
//           handleLogged={handleLogged}
//           handleShowRegister={handleShowRegister}
//           handleShowOlvide={handleShowOlvide}
//         />
//       )}

//       {!islogged && (
//         <>
//           {showRegistro && <Registro handleLogged={handleLogged} />}

//           {showOlvide && <OlvidePass />}
//         </>
//       )}
//     </section>
//   );
// };

// export default Sesion;
