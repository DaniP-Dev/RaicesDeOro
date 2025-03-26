import React from "react";
import "./Servicio.css";

const Servicio = () => {
  return (
    <>
      <div>
        {/* Div para Desktop */}
        <div className="max-md:hidden h-full">
          <div className="text-center my-8">
            <h1 className="negrita underline text-4xl mb-6">Servicios</h1>
            <h6 className="letraOro text-lg">Tenemos para ti...</h6>
          </div>

          <div className="grid grid-cols-12 gap-8 items-start mx-auto max-w-7xl">
            <div className="col-span-3 flex flex-col items-center text-center">
              <div className="flex items-center justify-center bg-[#E3AE3C] imgServiceDesktop h-48 w-48 rounded-full">
                <img
                  src="/ecomerce.png"
                  alt="ecomerce"
                  className="w-3/4 h-3/4"
                />
              </div>
              <h4 className="negrita text-xl mt-4">E-Commerce</h4>
              <p className="text-center mt-2 px-4">
                Lleva tus artesanías sostenibles al mundo. ¡Vende online y
                alcanza nuevos clientes!
              </p>
            </div>

            <div className="col-span-3 flex flex-col items-center text-center">
              <div className="flex items-center justify-center bg-[#E3AE3C] imgServiceDesktop h-48 w-48 rounded-full">
                <img
                  src="/ecomerce.png"
                  alt="orientación"
                  className="w-3/4 h-3/4"
                />
              </div>
              <h4 className="negrita text-xl mt-4">Orientación</h4>
              <p className="text-center mt-2 px-4">
                Para que tu marca artesanal brille. Planifica tu éxito con
                nosotros.
              </p>
            </div>

            <div className="col-span-3 flex flex-col items-center text-center">
              <div className="flex items-center justify-center bg-[#E3AE3C] imgServiceDesktop h-48 w-48 rounded-full">
                <img
                  src="/ecomerce.png"
                  alt="capacitacion"
                  className="w-3/4 h-3/4"
                />
              </div>
              <h4 className="negrita text-xl mt-4">Capacitación</h4>
              <p className="text-center mt-2 px-4">
                Aprende estrategias para vender tus productos sostenibles con
                éxito con nuestras capacitaciones.
              </p>
            </div>

            <div className="col-span-3 flex flex-col items-center text-center">
              <div className="flex items-center justify-center bg-[#E3AE3C] imgServiceDesktop h-48 w-48 rounded-full">
                <img
                  src="/ecomerce.png"
                  alt="comercio-exterior"
                  className="w-3/4 h-3/4"
                />
              </div>
              <h4 className="negrita text-xl mt-4">Comercio Exterior</h4>
              <p className="text-center mt-2 px-4">
                Lleva la belleza de tus productos sostenibles más allá de tus
                fronteras. Te ayudamos a exportar con éxito.
              </p>
            </div>
          </div>
        </div>
        {/* Div para celulares */}
        <div className="lg:hidden h-full">
          <div className="text-center mb-4 mt-4">
            <h1 className="negrita underline">Servicios</h1>
            <h6 className="letraOro">Tenemos para ti...</h6>
          </div>

          <div className="flex flex-col items-center justify-center gap-4">
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-6">
                <div className="flex flex-col items-center text-center">
                  <div className="flex items-center justify-center bg-[#E3AE3C] imgServiceMobile">
                    <img src="/ecomerce.png" alt="ecomerce" />
                  </div>
                  <h4 className="negrita">E-Comerce</h4>
                  <p className="text-center ml-4">
                    Lleva tus artesanías sostenibles al mundo. ¡Vende online y
                    alcanza nuevos clientes!
                  </p>
                </div>
              </div>

              <div className="col-span-6">
                <div className="flex flex-col items-center justify-center">
                  <div className="flex items-center justify-center bg-[#E3AE3C] imgServiceMobile">
                    <img src="/ecomerce.png" alt="ecomerce" />
                  </div>
                  <h4 className="negrita">Orientación</h4>
                  <p className="text-center mr-4">
                    Para que tu marca artesanal brille. Planifica tu éxito con
                    nosotros.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-6">
                <div className="flex flex-col items-center justify-center">
                  <div className="flex items-center justify-center bg-[#E3AE3C] imgServiceMobile">
                    <img src="/ecomerce.png" alt="ecomerce" />
                  </div>
                  <h4 className="negrita">Capacitación</h4>
                  <p className="text-center ml-4">
                    Con nuestras capacitaciones. Aprende estrategias para vender
                    tus productos sostenibles con éxito.
                  </p>
                </div>
              </div>

              <div className="col-span-6">
                <div className="flex flex-col items-center justify-center">
                  <div className="flex items-center justify-center bg-[#E3AE3C] imgServiceMobile">
                    <img src="/ecomerce.png" alt="ecomerce" />
                  </div>
                  <h4 className="negrita text-center">Comercio Exterior</h4>
                  <p className="text-center mr-4">
                    Lleva la belleza de tus productos sostenibles más allá de
                    tus fronteras. Te ayudamos a exportar con éxito.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Servicio;
