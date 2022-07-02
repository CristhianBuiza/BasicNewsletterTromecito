import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import LoginPage from "./Pages/LoginPage";
import PerfilPage from "./Pages/PerfilPage";
import OlvidePassword from "./Pages/OlvidePassword";
import RegistroPage from "./Pages/RegistroPage";
import About from "./Pages/About";
import PageWrapper from "./components/PageWrapper";
import Body from "./Pages/Body";
import NotFound from "./Pages/NotFound";
import { UserContextProvider } from "./context/UserContext";
import PagoPage from "./Pages/PagoPage";
import ConfirmacionPage from "./Pages/ConfirmacionPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <UserContextProvider>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <PageWrapper>
                <Body />
              </PageWrapper>
            </>
          }
        />

        <Route
          path="/about"
          element={
            <>
              <PageWrapper>
                <About />
              </PageWrapper>
            </>
          }
        />
        <Route
          path="*"
          element={
            <>
              <PageWrapper>
                <NotFound />
              </PageWrapper>
            </>
          }
        ></Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<PerfilPage />} />
        <Route path="/Registro" element={<RegistroPage />} />
        <Route path="/forget/password" element={<OlvidePassword />} />
        <Route
          path="/DatosPago"
          element={
            <>
              <PageWrapper>
                <PagoPage />
              </PageWrapper>
            </>
          }
        />
        <Route path="/Confirmacion" element={<ConfirmacionPage />} />
      </Routes>
    </BrowserRouter>
  </UserContextProvider>
);
