import React from "react";
import "./Aliados.css";

const Aliados = () => {
  return (
    <>
      {/* Div para Desktop */}
      <div className="max-md:hidden py-8">
        <div className="flex justify-center items-center gap-8 max-w-7xl mx-auto">
          {/* Tarjeta 1 */}
          <div className="bg-amber-100 rounded-lg shadow-lg p-4">
            <a
              href="https://www.instagram.com/circular__store/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* Imagen de la empresa */}
              <img
                src="/cStore.jpg"
                alt="CircularStore"
                className="w-48 h-auto mx-auto"
              />
              {/* Botón de Instagram */}
              <div className="flex justify-center items-center mt-4">
                <img
                  src="/instagram.png"
                  className="w-12 h-12"
                  alt="Instagram"
                />
              </div>
            </a>
          </div>

          {/* Tarjeta 2 */}
          <div className="bg-amber-100 rounded-lg shadow-lg p-4">
            <a
              href="https://www.instagram.com/caminotribal.co/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* Imagen de la empresa */}
              <img
                src="/caminoT.jpg"
                alt="CaminoTribal"
                className="w-48 h-auto mx-auto"
              />
              {/* Botón de Instagram */}
              <div className="flex justify-center items-center mt-4">
                <img
                  src="/instagram.png"
                  className="w-12 h-12"
                  alt="Instagram"
                />
              </div>
            </a>
          </div>

          {/* Tarjeta 3 */}
          <div className="bg-amber-100 rounded-lg shadow-lg p-4">
            <a
              href="https://www.instagram.com/sheyma_accesorios/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* Imagen de la empresa */}
              <img
                src="/sheyma.webp"
                alt="Sheyma Accesorios"
                className="w-48 h-auto mx-auto"
              />
              {/* Botón de Instagram */}
              <div className="flex justify-center items-center mt-4">
                <img
                  src="/instagram.png"
                  className="w-12 h-12"
                  alt="Instagram"
                />
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Div para Mobiles */}
      <div className="lg:hidden pt-4">
        <h1 className="negrita text-center underline">Aliados</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0 pb-5">
          {/* Tarjeta 1 */}
          <div className="grid grid-cols-1 bg-amber-100 m-3 redondeado">
            <a
              href="https://www.instagram.com/circular__store/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* Imagen de la empresa */}
              <img
                src="/cStore.jpg"
                alt="CircularStore"
                className="px-4 pt-4 pb-0"
              />
              {/* Botón de Instagram */}
              <div className="flex justify-center items-center">
                <img src="/instagram.png" className="w-50 p-3" />
              </div>
            </a>
          </div>

          {/* Tarjeta 2 */}
          <div className="grid grid-cols-1 bg-amber-100 m-3 redondeado">
            <a
              href="https://www.instagram.com/caminotribal.co/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* Imagen de la empresa */}
              <img
                src="/caminoT.jpg"
                alt="CaminoTribal"
                className="px-4 pt-4 pb-0"
              />
              {/* Botón de Instagram */}
              <div className="flex justify-center items-center">
                <img src="/instagram.png" className="w-50 p-3" />
              </div>
            </a>
          </div>

          {/* Tarjeta 3 */}
          <div className="grid grid-cols-1 bg-amber-100 m-3 redondeado">
            <a
              href="https://www.instagram.com/sheyma_accesorios/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* Imagen de la empresa */}
              <img
                src="/sheyma.webp"
                alt="CaminoTribal"
                className="px-4 pt-4 pb-0"
              />
              {/* Botón de Instagram */}
              <div className="flex justify-center items-center">
                <img src="/instagram.png" className="w-50 p-3" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aliados;
