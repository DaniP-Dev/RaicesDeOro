import React from "react";
import "./HeroeSection.css";

const HeroeSection = () => {
  return (
    <>
      {/* Sección visible en dispositivos móviles */}
      <div className="lg:hidden">
        <div className=" hero-section hero-mobile">
          <div>
            <h1 className="letraFloral borroso">Raíces</h1>
            <h1 className="letraFloral borroso">de</h1>
            <h1 className="letraFloral borroso">Oro</h1>
            <h3 className="bordeH px-3">
              Es momento de expandir tu negocio a los mercados cercanos y llevar
              tus ideas al extranjero.
            </h3>
            <a
              href="https://www.instagram.com/raicesdeorocol/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="boton-vibrante">Inicia Aqui</button>
            </a>
          </div>
        </div>
      </div>

      {/* Sección visible en computadoras */}
      <div className="max-md:hidden">
        <div className="hero-section hero-desktop flex justify-center items-center bg-cover bg-center h-screen">
          <div className="text-center text-white">
            <h1 className="text-6xl font-bold mb-4 letraFloral">
              Raíces de Oro
            </h1>
            <h3 className="text-xl mb-6 bordeH px-6">
              Es momento de expandir tu negocio a los mercados cercanos y llevar
              tus ideas al extranjero.
            </h3>
                    
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroeSection;
