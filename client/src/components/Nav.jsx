import React from "react";
import { Link } from "react-router-dom";

import "../style/nav.css";
import { useAuth } from "../context/AuthContext";
export default function Nav() {
  const { isAuthenticated, user, logout } = useAuth();

  console.log({ isAuthenticated, user });
  return (
    <nav>
      <ul>
        {isAuthenticated ? (
          <>
            <li>
              <p>Bienvenido!, {user.username}</p>
            </li>
            {user.role === "admin" ? (
              <>
                <li>
                  <Link to="/catalogo-de-equipos">Catálogo de equipos</Link>
                </li>
                <li>
                  <Link to="/registro-de-equipo">Registro de equipo</Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/catalogo-de-equipos">Catálogo de equipos</Link>
                </li>
              </>
            )}
            <li>
              <Link to="/inicio-de-sesion" onClick={logout}>
                Cerrar sesión
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/registro-de-usuario">Registro</Link>
            </li>
            <li>
              <Link to="/inicio-de-sesion">Inicio de sesión</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
