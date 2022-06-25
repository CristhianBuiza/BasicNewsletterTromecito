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

import About from "./Pages/About";
import PageWrapper from "./components/PageWrapper";
import Body from "./Pages/Body";
import NotFound from "./Pages/NotFound";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<><PageWrapper><Body /></PageWrapper></>} />
        <Route path="/home" element={<><PageWrapper><Body /></PageWrapper></>} />
        <Route path="/about" element={<><PageWrapper><About/></PageWrapper></>} />
        <Route path="*" element={<><PageWrapper><NotFound/></PageWrapper></>}></Route>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/profile" element={<PerfilPage />} />
      </Routes>
    </BrowserRouter>
 
);


