"use client";
import React, { useEffect, useState } from "react";
import "./SplashScreen.css";

interface SplashScreenProps {
  onFinish: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onFinish }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const fadeOutTimer = setTimeout(() => {
      setFadeOut(true);
    }, 5500);

    const finishTimer = setTimeout(() => {
      document.body.style.overflow = "";
      onFinish();
    }, 6000);

    return () => {
      clearTimeout(fadeOutTimer);
      clearTimeout(finishTimer);
      document.body.style.overflow = "";
    };
  }, [onFinish]);

  return (
    <div
      className={`splash-container${fadeOut ? " fade-out" : ""}`}
      aria-label="Pantalla de bienvenida"
    >
      {/* Contenido del splash */}
      <div className="phase phase1">
        <p className="phase1-text">
          <span className="line1">Raíces de Oro</span>
          <span className="line2">Tesoros culturales Hechos a Mano</span>
        </p>
      </div>
      <div className="phase phase2">
        <img src="/Raices.png" alt="Logo de raíces" className="logo" />
        <h2 className="subtitle">Crezcamos Juntos...</h2>
      </div>
    </div>
  );
};

export default SplashScreen;
