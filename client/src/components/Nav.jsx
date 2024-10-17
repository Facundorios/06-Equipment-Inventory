import React from "react";
import { Link } from "react-router-dom";

import "../style/nav.css";
import { useAuth } from "../context/AuthContext";
export default function Nav() {
  const { isAuthenticated, user, logout } = useAuth();

  return (
    <nav>
      {isAuthenticated ? (
        <div>
          <p>Tu rol es: {user.role}</p>
          <Link to="/">
            <button>inicio</button>{" "}
          </Link>
          <Link to="/catalogo-de-equipos">
            <button>Catalogo de Equipos</button>
          </Link>

          {user.role === "admin" ? (
            <Link to="/agregar-producto">
              <button>Añadir producto</button>
            </Link>
          ) : null}
          <Link to="/" onClick={logout}>
            <button>Cerrar Sesión</button>
          </Link>
        </div>
      ) : (
        <div>
          <Link to="/inicio-de-sesion">
            <button> Iniciar Sesión</button>
          </Link>
          <Link to="/registro-de-usuario">
            <button> Registro</button>
          </Link>
        </div>
      )}
    </nav>
  );
}
