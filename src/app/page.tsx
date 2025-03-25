"use client";
import React, { useState, useEffect } from "react";
import Header from "@/components/header/Header";
import HeroeSection from "@/pages/heroe/HeroeSection";
import SplashScreen from "@/components/splash/SplashScreen";
import Servicio from "@/pages/servicioPrestado/Servicio"
import About from "@/pages/about/About";

const Page = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeOutTimer = setTimeout(() => {
      setFadeOut(true);
    }, 5500); // Un poco antes de terminar el splash

    const hideSplashTimer = setTimeout(() => {
      setShowSplash(false);
    }, 6000);

    return () => {
      clearTimeout(fadeOutTimer);
      clearTimeout(hideSplashTimer);
    };
  }, []);

  return (
    <>
      {/* SplashScreen activo */}
      {showSplash && <SplashScreen onFinish={() => setShowSplash(false)} />}

      {/* Contenido principal (ya cargado en segundo plano) */}
      <div className={`page-content ${fadeOut ? "fade-in" : "hidden-content"}`}>
        <div className="w-full p-0 h-20 fixed">
          <Header />
        </div>
        <div className="w-full p-0">
          <HeroeSection />
        </div>
        <div>
          <Servicio/>
        </div>

        <div>
          <About/>

        </div>

      </div>
    </>
  );
};

export default Page;
