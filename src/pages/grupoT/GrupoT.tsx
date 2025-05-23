import React from "react";
import "./GrupoT.css";

const GrupoT = () => {
  return (
    <>
      {/* Medida para Desktop */}
      <div className="max-md:hidden bg-amber-100 p-10">
        <div className="flex justify-center items-center gap-8 max-w-7xl mx-auto">
          {/* Primera tarjeta */}
          <div className="flex flex-col items-center">
            <img
              src="/nina.jpg"
              alt="Nina Suárez"
              className="circulo object-cover w-48 h-48"
            />
            <h2 className="text-center mt-4 letraOro text-2xl">Nina Suárez</h2>
            <h6 className="mt-2 text-lg">Relacionista Pública</h6>
            <div className="flex space-x-4 mt-4">
              <a
                href="https://www.instagram.com/ninapaola_14/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/instapeque.png"
                  className="w-8 h-8"
                  alt="Instagram"
                />
              </a>
            </div>
          </div>

          {/* Segunda tarjeta */}
          <div className="flex flex-col items-center">
            <img
              src="/kevin.jpg"
              alt="Kevin Ruiz"
              className="circulo object-cover w-48 h-48"
            />
            <h2 className="text-center mt-4 letraOro text-2xl">Kevin Ruiz</h2>
            <h6 className="mt-2 text-lg">Director Ejecutivo</h6>
            <div className="flex space-x-4 mt-4">
              <a
                href="https://x.com/andresrugut"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/x.png" className="w-8 h-8" alt="X" />
              </a>
              <a
                href="https://www.linkedin.com/in/andresruizgut/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/linkedin.png" className="w-8 h-8" alt="LinkedIn" />
              </a>
            </div>
          </div>

          {/* Tercera tarjeta */}
          <div className="flex flex-col items-center">
            <img
              src="/diana.jpg"
              alt="Diana Orellanas"
              className="circulo object-cover w-48 h-48"
            />
            <h2 className="text-center mt-4 letraOro text-2xl">
              Diana Orellanas
            </h2>
            <h6 className="mt-2 text-lg">Directora Operativa</h6>
            <div className="flex space-x-4 mt-4">
              <a
                href="https://www.instagram.com/dpatricia00_/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/instapeque.png"
                  className="w-8 h-8"
                  alt="Instagram"
                />
              </a>
            </div>
          </div>

          {/* Cuarta tarjeta */}
          <div className="flex flex-col items-center">
            <img
              src="/karina.jpg"
              alt="Karina Gonzales"
              className="circulo object-cover w-48 h-48"
            />
            <h2 className="text-center mt-4 letraOro text-2xl">
              Karina Gonzales
            </h2>
            <h6 className="mt-2 text-lg">Directora Financiera</h6>
            <div className="flex space-x-4 mt-4">
              <a
                href="https://www.instagram.com/karinarosibel/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/instapeque.png"
                  className="w-8 h-8"
                  alt="Instagram"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/*Medida para Mobiles*/}
      <div className="lg:hidden bg-amber-100 pb-5">
        <div className="text-center pt-5 pb-3">
          <h1 className="negrita underline">Equipo de Trabajo</h1>
          <h4 className="letraOro">Fundadores</h4>
        </div>

        <div className="grid grid-cols-2 gap-1">
          {/* Primera imagen */}
          <div className="p-2 w-full aspect-w-1 aspect-h-1 flex flex-col items-center justify-center">
            <img
              src="/nina.jpg"
              alt="nina"
              className="circulo object-cover w-full h-full"
            />
            <h2 className="text-center mt-2 letraOro">Nina Suárez</h2>
            <h6 className="p-0 m-lg-0">Relacionista Publica</h6>
            <div className="flex space-x-2 mt-2">
              <a
                href="https://www.instagram.com/ninapaola_14/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/instapeque.png"
                  className="w-8 h-8"
                  alt="Instagram"
                />
              </a>
            </div>
          </div>

          {/* Segunda imagen */}
          <div className="p-2 w-full aspect-w-1 aspect-h-1 flex flex-col items-center justify-center">
            <img
              src="/kevin.jpg"
              alt="Kevin"
              className="circulo object-cover w-full h-full"
            />
            <h2 className="text-center mt-2 letraOro">Kevin Ruiz</h2>
            <h6 className="p-0 m-lg-0">Director Ejecutivo</h6>
            <div className="flex space-x-2 mt-2">
              <a
                href="https://x.com/andresrugut"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/x.png" className="w-8 h-8" alt="Instagram" />
              </a>
              <a
                href="https://www.linkedin.com/in/andresruizgut/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/linkedin.png" className="w-8 h-8" alt="LinkedIn" />
              </a>
            </div>
          </div>

          {/* Tercera imagen */}
          <div className="p-2 w-full aspect-w-1 aspect-h-1 flex flex-col items-center justify-center">
            <img
              src="/diana.jpg"
              alt="Diana"
              className="circulo object-cover w-full h-full"
            />
            <h2 className="text-center mt-2 letraOro">Diana Orellanas</h2>
            <h6 className="p-0 m-lg-0">Directora Operativa</h6>
            <div className="flex space-x-2 mt-2">
              <a
                href="https://www.instagram.com/dpatricia00_/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/instapeque.png"
                  className="w-8 h-8"
                  alt="Instagram"
                />
              </a>
            </div>
          </div>

          {/* Cuarta imagen */}
          <div className="w-full aspect-w-1 aspect-h-1 flex flex-col items-center justify-center">
            <img
              src="/karina.jpg"
              alt="karina"
              className="circulo object-cover w-full h-full"
            />
            <h2 className="text-center mt-2 letraOro">Karina Gonzales</h2>
            <h6 className="p-0 m-lg-0">Directora Financiera</h6>
            <div className="flex space-x-2 mt-2">
              <a
                href="https://www.instagram.com/karinarosibel/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/instapeque.png"
                  className="w-8 h-8"
                  alt="Instagram"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GrupoT;
