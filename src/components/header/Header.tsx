"use client";
import React, { useEffect, useState } from "react";
import "./Header.css";
import BotonWpp from "../butonWpp/BotonWpp";

const Header: React.FC = () => {
  const [isTransparent, setIsTransparent] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (): void => {
    // Verificar la posición del scroll
    if (window.scrollY === 0) {
      setIsTransparent(true);
    } else {
      setIsTransparent(false);
    }
  };

  useEffect(() => {
    // Escuchar el evento de scroll
    window.addEventListener("scroll", handleScroll);

    return () => {
      // Limpiar el evento al desmontar
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`header w-full h-full p-2 ${
          isTransparent ? "transparent" : "solid"
        }`}
      >
        {/* Div visible para md y tamaños menores */}
        <div className="d-block d-lg-none h-full w-full borroso-container p-0 m-0">
          <div className="row h-full p-0 m-0">
            {/* Imagen */}
            <div className="col h-100 d-flex align-items-center p-0 m-0">
              <img
                className="w-19 h-auto img-fluid"
                src="./Raices.png"
                alt="Logo"
              />
            </div>

            {/* Botones alineados */}
            <div className="col h-100 d-flex justify-content-end align-items-center">
              {/* Nuevo botón a la izquierda */}
              <BotonWpp />

              {/* Botón Toggle */}
              <button
                className="toggle-button h-full w-10 d-flex justify-content-end align-items-center"
                onClick={() => setIsOpen(!isOpen)}
              >
                <a className="h-100 d-flex justify-content-end align-items-center">
                  <img className="img-fluid" src="/navBoton.png" alt="none" />
                </a>
              </button>
            </div>
          </div>

          {/* Menú desplegable */}
          <ul
            className={`nav-menu mt-1 text-center ${
              isOpen ? "d-block" : "d-none"
            }`}
          >
            <li>
              <a href="#">Inicio</a>
            </li>
            <li>
              <a href="#">Vuelos</a>
            </li>
            <li>
              <a href="#">Reservas</a>
            </li>
            <li>
              <a href="#">Contáctanos</a>
            </li>
          </ul>
        </div>

        {/* Div visible para lg y tamaños mayores */}
        <div className="d-none d-lg-block w-full">
          <div className="row h-full align-items-center">
            {/* Imagen alineada a la izquierda */}
            <div
              className="col-auto d-flex align-items-center"
              style={{
                height: "83px",
                overflow: "hidden",
                background: "rgba(255, 255, 255, 0.1)", // Fondo semitransparente
                backdropFilter: "blur(10px)", // Efecto borroso
                WebkitBackdropFilter: "blur(10px)", // Soporte en navegadores Webkit
                borderRadius: "50px", // Bordes redondeados para mejor apariencia
                padding: "10px 20px", // Espaciado interno
              }}
            >
              <img
                className="img-fluid h-100"
                src="./Raices.png"
                alt="Raíces"
                style={{ maxHeight: "100%", width: "auto" }}
              />
            </div>

            {/* Botones alineados a la derecha */}
            <div className="col d-flex justify-content-end align-items-center">
              <BotonWpp />
              <ul className="nav-menu mt-3">
                <li>
                  <a href="#">Inicio</a>
                </li>
                <li>
                  <a href="#">Vuelos</a>
                </li>
                <li>
                  <a href="#">Reservas</a>
                </li>
                <li>
                  <a href="#">Contáctanos</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
