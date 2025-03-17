"use client";
import React, { useEffect } from "react";
import "./SplashScreen.css";

interface SplashScreenProps {
  onFinish: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onFinish }) => {
  useEffect(() => {
    console.log("🟢 SplashScreen iniciado");
    // Se cierra a los 1.3 segundos (0.2 s antes de que termine el zoom de la imagen a 1.5 s)
    const timer = setTimeout(() => {
      console.log("✅ SplashScreen finalizado");
      onFinish();
    }, 1000);

    return () => {
      clearTimeout(timer);
      console.log("🧹 Timer limpiado.");
    };
  }, [onFinish]);

  return (
    <div className="splash-container" aria-label="Pantalla de bienvenida">
      <button className="skip-button" onClick={onFinish}>
        Saltar
      </button>
      <div className="splash-content">
        <img src="/Raices.png" alt="Logo de la marca" className="zoom-image" />
        <h2 className="subtitle">Crezcamos juntos</h2>
      </div>
    </div>
  );
};

export default SplashScreen;
