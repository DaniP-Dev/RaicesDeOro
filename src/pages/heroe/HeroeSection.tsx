
import React from "react";
import "./HeroeSection.css";

const HeroeSection = () => {
  return (
    <>
      {/* Sección visible en dispositivos móviles */}
      <div className="d-block d-lg-none hero-section hero-mobile w-full">
        <div className="pt-60 flex flex-col items-center justify-center text-center">
          {/* Texto principal */}
          <h1 className="text-3xl font-bold mb-4">
            ¡Bienvenido a nuestra Hero Section!
          </h1>

          {/* Descripción o subtítulo */}
          <p className="text-lg text-gray-600 mb-6">
            Explora nuestras ofertas y servicios exclusivos.
          </p>

          {/* Botones */}
          <div className="flex space-x-4">
            <button className="px-4 py-2 bg-primary text-white rounded-md">
              Aprende Más
            </button>
            <button className="px-4 py-2 bg-secondary text-white rounded-md">
              Contáctanos
            </button>
          </div>
        </div>
      </div>

      {/* Sección visible en computadoras */}
      <div className="d-none d-lg-block hero-section hero-desktop ">
        <div className="pt-60 flex flex-col items-center justify-center text-center">
          {/* Texto principal */}
          <h1 className="text-3xl font-bold mb-4">
            ¡Bienvenido a nuestra Hero Section!
          </h1>

          {/* Descripción o subtítulo */}
          <p className="text-lg text-gray-600 mb-6">
            Explora nuestras ofertas y servicios exclusivos.
          </p>

          {/* Botones */}
          <div className="flex space-x-4">
            <button className="px-4 py-2 bg-primary text-white rounded-md">
              Aprende Más
            </button>
            <button className="px-4 py-2 bg-secondary text-white rounded-md">
              Contáctanos
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroeSection;
