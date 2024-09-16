import React from "react";
import "../index.css";

export default function HomePage() {
  return (
    <div>
      <h1>Ingrese a la Aplicación</h1>
      <div>
        <h2>Registro de Usuario</h2>
        <a href="/registro-de-usuario">
          <button>Registrarse</button>
        </a>
      </div>
      <div>
        <h2>Iniciar Sesión</h2>
        <a href="/inicio-de-sesion">
          <button>Iniciar Sesión</button>
        </a>
      </div>
    </div>
  );
}
