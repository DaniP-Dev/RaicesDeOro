import React from "react";

const Footer = () => {
  const numero = 3016328564;
  const mensaje = "Estoy interesado en crear mi página web";
  return (
    <footer className="bg-gray-900 text-white pt-6 pb-4">
      <div className="container mx-auto text-center">
        {/* Información adicional */}
        <div className="mt-6 text-sm text-gray-400">
          <p>
            © 2025 DaniDev. Todos los derechos reservados.
            <br />
            Créale presentación web a tu negocio desde $300.000
            <br />
            ↓Links del creador de la pagina↓
          </p>
          {/* Contenedor de las redes sociales */}
          <div className="flex justify-center items-center space-x-4">
            <a href="https://github.com/DaniP-Dev">
              <img src="/github.png" className="h-5 w-5" />
            </a>
            <a href="https://x.com/Danipe_23">
              <img src="/x_blanco.jpg" className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com/in/danielpe971223/">
              <img src="/linkedin.png" className="h-5 w-5" />
            </a>
            <a
              href={`https://wa.me/${numero}?text=${encodeURIComponent(
                mensaje
              )}`}
            >
              <img src="/whatsapp_peque.png" className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
