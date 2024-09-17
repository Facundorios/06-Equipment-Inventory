import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useAuth } from "../context/AuthContext";

export default function LoginPage() {
  const { login, isAuthenticated } = useAuth();

  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  useEffect(() => {
    if (isAuthenticated) navigate("/catalogo-de-equipos ");
  }, [isAuthenticated]);

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (credentials) => {
    login(credentials);
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit(credentials);
        }}
      >
        <h1>Iniciar sesión</h1>
        <input
          type="username"
          name="username"
          placeholder="Nombre de usuario"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          onChange={handleChange}
        />
        <button type="submit">Iniciar sesión</button>
      </form>
      <Link to="/registro-de-usuario">
        <button>Registrarse</button>
      </Link>
    </div>
  );
}
