import React from "react";
import "./BotonWpp.css";

const BotonWpp = () => {
  const numeroTelefono = "573014925261";
  const mensaje = encodeURIComponent(
    "¡Hola! Quiero más información sobre tu servicio."
  );

  return (
    <>
      <a
        className="containerWpp h-20 w-20"
        href={`https://wa.me/${numeroTelefono}?text=${mensaje}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/wpp.png" alt="" />
      </a>
    </>
  );
};

export default BotonWpp;
