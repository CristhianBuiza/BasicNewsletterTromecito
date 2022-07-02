import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import LoginPage from "./Pages/LoginPage";
import PerfilPage from "./Pages/PerfilPage";

// import Login from "./Login";
// import Registro from "./Registro";
// import OlvidePass from "./OlvidePass";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
<<<<<<< main
        <Route path="/" element={<App />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<PerfilPage />} />
=======
        <Route path="/" element={<><PageWrapper><Body /></PageWrapper></>} />
        <Route path="/home" element={<><PageWrapper><Body /></PageWrapper></>} />
        <Route path="/about" element={<><PageWrapper><About/></PageWrapper></>} />
        <Route path="*" element={<><PageWrapper><NotFound/></PageWrapper></>}></Route>
        <Route path="/login" element={<LoginPage/>}/>
        
>>>>>>> local
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


