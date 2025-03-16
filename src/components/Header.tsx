"use client";
import React, { useState } from "react";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="grid grid-cols-2 items-center p-4 bg-gray-800 text-white">
      {/* Logo a la izquierda */}
      <div className="text-2xl font-bold justify-self-start">Mi Logo</div>

      {/* Menú en pantallas grandes */}
      <nav className="hidden md:flex justify-end space-x-4">
        <a href="#home" className="hover:text-yellow-400">
          Inicio
        </a>
        <a href="#about" className="hover:text-yellow-400">
          Acerca de
        </a>
        <a href="#services" className="hover:text-yellow-400">
          Servicios
        </a>
        <a href="#contact" className="hover:text-yellow-400">
          Contacto
        </a>
      </nav>

      {/* Botón del menú en pantallas pequeñas */}
      <button
        className="md:hidden justify-self-end p-2 text-gray-400 hover:text-white"
        onClick={menuClick}
      >
        {menuOpen ? "Cerrar" : "Menú"}
      </button>

      {/* Menú desplegable en móviles */}
      {menuOpen && (
        <nav className="absolute top-16 left-0 w-full bg-gray-800 text-white flex flex-col items-center space-y-2 p-4 md:hidden">
          <a href="#home" className="hover:text-yellow-400">
            Inicio
          </a>
          <a href="#about" className="hover:text-yellow-400">
            Acerca de
          </a>
          <a href="#services" className="hover:text-yellow-400">
            Servicios
          </a>
          <a href="#contact" className="hover:text-yellow-400">
            Contacto
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
