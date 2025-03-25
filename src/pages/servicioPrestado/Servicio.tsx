import React from "react";
import "./Servicio.css";

const Servicio = () => {
  return (
    <>
      <div>
        {/* Div para Desktop */}
        <div className="max-md:hidden">
          <div className="text-center">
            <h1>Servicios</h1>
            <h3>Crece con nosotros</h3>
          </div>
          <div className="grid grid-cols-12 place-items-center">
            <div className="col-span-3">
              <div className="grid place-items-center">
                <div className="flex items-center justify-center imgServiceDesktop bg-teal-400">
                  <img src="/ecomerce.png" alt="ecomerce" />
                </div>
                <h4>E-Comerce</h4>
              </div>
            </div>

            <div className="col-span-3">
              <div className="grid place-items-center">
                <div className="flex items-center justify-center imgServiceDesktop bg-teal-400">
                  <img src="/ecomerce.png" alt="ecomerce" />
                </div>
                <h4>Capacitacion</h4>
              </div>
            </div>

            <div className="col-span-3">
              <div className="grid place-items-center">
                <div className="flex items-center justify-center imgServiceDesktop bg-teal-400">
                  <img src="/ecomerce.png" alt="ecomerce" />
                </div>
                <h4>Orientacion</h4>
              </div>
            </div>

            <div className="col-span-3">
              <div className="grid place-items-center">
                <div className="flex items-center justify-center imgServiceDesktop bg-teal-400">
                  <img src="/ecomerce.png" alt="ecomerce" />
                </div>
                <h4>Comercio Exterior</h4>
              </div>
            </div>
          </div>
        </div>

        {/* Div para celulares */}
        <div className="lg:hidden h-full">
          <div className="text-center mb-4 mt-4">
            <h1>Servicios</h1>
            <h3>Crece con nosotros</h3>
          </div>

          <div className="flex flex-col items-center justify-center gap-4">
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-6">
                <div className="flex flex-col items-center text-center">
                  <div className="flex items-center justify-center bg-[#E3AE3C] imgServiceMobile">
                    <img src="/ecomerce.png" alt="ecomerce" />
                  </div>
                  <h4>E-Comerce</h4>
                  <p className="text-justify ml-4">
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
                  <h4>orientacion</h4>
                  <p className="text-justify mr-4">
                    Para que tu marca artesanal
                    brille. Planifica tu éxito con nosotros.
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
                  <h4>Capacitacion</h4>
                  <p className="text-justify ml-4">
                    Desarrolla tu negocio con nuestras capacitaciones. Aprende
                    estrategias para vender tus productos sostenibles con éxito.
                  </p>
                </div>
              </div>

              <div className="col-span-6">
                <div className="flex flex-col items-center justify-center">
                  <div className="flex items-center justify-center bg-[#E3AE3C] imgServiceMobile">
                    <img src="/ecomerce.png" alt="ecomerce" />
                  </div>
                  <h4>Comercio Exterior</h4>
                  <p className="text-justify mr-4">
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
