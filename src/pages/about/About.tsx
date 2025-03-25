import React from "react";
import "./About.css";

const About = () => {
  return (
    <>
      {/* Div para desktop */}
      <div className="max-md:hidden">
        <div className=""></div>
      </div>

      {/* Div para celulares */}
      <div className="lg:hidden bg-amber-100 pt-5">
        <div className="text-center mb-5">
          <h1 className="negrita underline ">Raíces de Oro</h1>
          <h6 className="letraOro">Tesoros culturales</h6>
        </div>
        <div className="grid grid-rows-1 gap-5">
          <div className="text-center">
            <h1 className="negrita">Mision</h1>
            <div className="text-black flex items-center justify-center mx-4">
              <p>
                Facilitamos la conexión entre emprendimientos artesanales y
                mercados nacionales e internacionales, promoviendo la
                comercialización de bisutería y accesorios ornamentales
                sostenibles hechos a mano con materiales reciclados, naturales o
                biodegradables. Impulsamos el desarrollo económico, cultural y
                social, generando y promoviendo empleo digno y empoderando a
                mujeres artesanas, y emprendimientos locales mediante prácticas
                responsables que contribuyen a la sostenibilidad ambiental.
              </p>
            </div>
          </div>

          <div className="text-center">
            <h1 className="negrita">Vision</h1>
            <div className="text-black flex items-center justify-center mx-4">
              <p>
                Ser reconocidos globalmente como el puente que conecta la
                riqueza artesanal de Colombia con los mercados internacionales,
                liderando en sostenibilidad, inclusión y comercio responsable.
                Aspiramos a generar valor compartido al garantizar un
                crecimiento financiero sólido, empoderar a emprendedores
                mediante empleo digno, formación y capacitación continua, y
                promover una economía circular basada en materiales reciclados,
                naturales y biodegradables. Nuestra meta es abrir espacios para
                el desarrollo de emprendimientos sostenibles, generando impacto
                positivo en el medio ambiente y en las vidas de quienes confían
                en nuestras creaciones.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
