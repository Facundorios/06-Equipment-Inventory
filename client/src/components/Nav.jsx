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
            <p>Home</p>
          </Link>
          <Link to="/" onClick={logout}>
            <p>Cerrar Sesión</p>
          </Link>
          <Link to="/catalogo-de-equipos">
            <p>Catalogo de Equipos</p>
          </Link>

          {user.role === "admin" ? (
            <Link to="/agregar-producto">
              <button>Añadir producto</button>
            </Link>
          ) : null}
        </div>
      ) : (
        <div>
          <Link to="/">
            <p>Home</p>
          </Link>
          <Link to="/inicio-de-sesion">
            <p>Login</p>
          </Link>
          <Link to="/registro-de-usuario">
            <p>Register</p>
          </Link>
        </div>
      )}
    </nav>
  );
}
