"use client"; // Requiere useState y useEffect en el cliente
import { useEffect, useState } from "react";

const SplashScreen = ({ onFinish }: { onFinish: () => void }) => {
  useEffect(() => {
    const timer = setTimeout(() => onFinish(), 5000);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center bg-white">
        <img src="/Raices.png" alt="Logo" className="w-64 h-auto" />
      </div>
    </>
  );
};

export default SplashScreen;
