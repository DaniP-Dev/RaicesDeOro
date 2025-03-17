"use client";
import React, { useEffect, useState } from "react";
import "./SplashScreen.css";

interface SplashScreenProps {
  onFinish: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onFinish }) => {
  // Usamos un estado para activar el fade out global (al final del splash)
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // No se controla la transición de fase por estado;
    // en su lugar, ambos bloques se renderan y sus animaciones (definidas con delay en CSS)
    // inician en el momento deseado (2.7 s) para lograr el crossfade.
    const fadeOutTimer = setTimeout(() => {
      setFadeOut(true);
    }, 5500);

    const finishTimer = setTimeout(() => {
      onFinish();
    }, 6000);

    return () => {
      clearTimeout(fadeOutTimer);
      clearTimeout(finishTimer);
    };
  }, [onFinish]);

  return (
    <div
      className={`splash-container${fadeOut ? " fade-out" : ""}`}
      aria-label="Pantalla de bienvenida"
    >
      <button className="skip-button" onClick={onFinish}>
        Saltar
      </button>
      {/* Fase 1: Texto en dos líneas fijas */}
      <div className="phase phase1">
        <p className="phase1-text">
          <span className="line1">Raíces de Oro</span>
          <span className="line2">Tesoros culturales Hechos a Mano</span>
        </p>
      </div>
      {/* Fase 2: Logo y subtítulo */}
      <div className="phase phase2">
        <img src="/Raices.png" alt="Logo de raíces" className="logo" />
        <h2 className="subtitle">Crezcamos Juntos...</h2>
      </div>
    </div>
  );
};

export default SplashScreen;
