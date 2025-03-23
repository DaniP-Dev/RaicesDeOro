import React from "react";
import "./HeroeSection.css";

const HeroeSection = () => {
  return (
    <>
      {/* Sección visible en dispositivos móviles */}
      <div className="d-block d-lg-none hero-section hero-mobile w-full">
        <div
          className="pt-60 flex flex-col items-center justify-center text-center"
          style={{
            backgroundImage: "url('your-image.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            color: "white",
            textShadow: "0px 2px 4px rgba(0, 0, 0, 0.8)",
          }}
        >
          {/* inicio contenido Hero */}
          <h1 className="text-3xl font-bold mb-4">
            ¡Bienvenido a Raíces de Oro By KaRu!
          </h1>

          {/* Descripción o subtítulo */}
          <p className="text-lg text-gray-300 mb-6">
            Descubre nuestra bisutería artesanal hecha a mano con materiales
            reciclados y sostenibles. Estamos dedicados a empoderar a mujeres en
            comunidades vulnerables, promover la moda sostenible y llevar los
            talentos y emprendimientos locales hacia un impacto global.
          </p>

          {/* Botones */}
          <div className="flex space-x-4">
            <button className="px-4 py-2 bg-primary text-white rounded-md shadow-lg">
              ¡Quiero Crecer!
            </button>
          </div>
          {/* fin contenido Hero */}
        </div>
      </div>

      {/* Sección visible en computadoras */}
      <div className="d-none d-lg-block hero-section hero-desktop ">
        <div
          className="pt-60 flex flex-col items-center justify-center text-center"
          style={{
            backgroundImage: "url('your-image.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            color: "white",
            textShadow: "0px 2px 4px rgba(0, 0, 0, 0.8)",
          }}
        >
          {/* inicio contenido Hero */}
          <h1 className="text-3xl font-bold mb-4">
            ¡Bienvenido a Raíces de Oro By KaRu!
          </h1>

          {/* Descripción o subtítulo */}
          <p className="text-lg text-gray-300 mb-6">
            Descubre nuestra bisutería artesanal hecha a mano con materiales
            reciclados y sostenibles. Estamos dedicados a empoderar a mujeres en
            comunidades vulnerables, promover la moda sostenible y llevar los
            talentos y emprendimientos locales hacia un impacto global.
          </p>

          {/* Botones */}
          <div className="flex space-x-4">
            <button className="px-4 py-2 bg-primary text-white rounded-md shadow-lg">
              ¡Quiero Crecer!
            </button>
          </div>
          {/* fin contenido Hero */}
        </div>
      </div>
    </>
  );
};

export default HeroeSection;
