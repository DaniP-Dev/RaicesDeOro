import React from "react";
import "./Aliados.css";

const Aliados = () => {
  return (
    <>
      {/* Div para desktop */}
      <div className="max-md:hidden">
        <div className=""> escritorio</div>
      </div>

      {/* Div para Mobiles */}
      <div className="lg:hidden pt-4">
        <h1 className="negrita text-center underline">Aliados</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Tarjeta 1 */}
          <div className="grid grid-cols-1 bg-amber-100 m-3">
            <a href="https://www.instagram.com/circular__store/">
              {/* Imagen de la empresa */}
              <img
                src="/cStore.jpg"
                alt="CircularStore"
                className="px-4 pt-4 pb-0"
              />
              {/* Botón de Instagram */}
              <div className="flex justify-center items-center">
                <img src="/instagram.png" className="w-50 pb-3" />
              </div>
            </a>
          </div>

          {/* Tarjeta 2 */}
          <div className="grid grid-cols-1 bg-amber-100 m-3">
            <a href="https://www.instagram.com/caminotribal.co/">
              {/* Imagen de la empresa */}
              <img
                src="/caminoT.jpg"
                alt="CaminoTribal"
                className="px-4 pt-4 pb-0"
              />
              {/* Botón de Instagram */}
              <div className="flex justify-center items-center">
                <img src="/instagram.png" className="w-50 pb-3" />
              </div>
            </a>
          </div>

          {/* Tarjeta 3 */}
          <div className="grid grid-cols-1 bg-amber-100 m-3">
            <a href="https://www.instagram.com/sheyma_accesorios/">
              {/* Imagen de la empresa */}
              <img
                src="/sheyma.webp"
                alt="CaminoTribal"
                className="px-4 pt-4 pb-0"
              />
              {/* Botón de Instagram */}
              <div className="flex justify-center items-center">
                <img src="/instagram.png" className="w-50 pb-3" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aliados;
