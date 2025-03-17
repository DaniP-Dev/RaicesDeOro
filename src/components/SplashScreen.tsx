"use client";
import React, { useEffect, useState } from "react";
import "./SplashScreen.css";

interface SplashScreenProps {
  onFinish: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onFinish }) => {
  // 'phase': 1 = fase 1 (texto); 2 = fase 2 (logo + subtítulo)
  // 'fadeOut': activa el desvanecimiento general del splash.
  const [phase, setPhase] = useState(1);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Fase 1 dura hasta 3 segundos.
    const phaseTimer = setTimeout(() => {
      setPhase(2);
    }, 3000);

    // Activa el fade-out del splash a los 5.5 segundos.
    const fadeOutTimer = setTimeout(() => {
      setFadeOut(true);
    }, 5500);

    // Finaliza el splash a los 6 segundos.
    const finishTimer = setTimeout(() => {
      onFinish();
    }, 6000);

    return () => {
      clearTimeout(phaseTimer);
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
      {phase === 1 && (
        <div className="phase phase1">
          <p className="phase1-text">
            <span className="line1">Raíces de Oro.</span>
            <span className="line2">Tesoros culturales Hechos a Mano.</span>
          </p>
        </div>
      )}
      {phase === 2 && (
        <div className="phase phase2">
          <img src="/Raices.png" alt="Logo de raíces" className="logo" />
          <h2 className="subtitle">Crezcamos juntos</h2>
        </div>
      )}
    </div>
  );
};

export default SplashScreen;
