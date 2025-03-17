"use client";
import { useEffect } from "react";
import "./SplashScreen.css"; // Importa animaciones CSS

const SplashScreen = () => {
  useEffect(() => {
    console.log("🟢 SplashScreen iniciado");
    return () => console.log("🧹 SplashScreen desmontado");
  }, []);

  return (
    <div className="splash-container">
      <h1 className="fade-text">Crece con nosotros</h1>
      <img src="/Raices.png" alt="Logo" className="zoom-image" />
    </div>
  );
};

export default SplashScreen;
