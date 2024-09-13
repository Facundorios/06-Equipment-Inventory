import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { loginRequest } from "../api/auth";
import { useAuth } from "../context/AuthContext";

export default function LoginPage() {
  const { login } = useAuth();

  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async () => {
    loginRequest(credentials);
  };

  return (
    <div>
      <h1>Iniciar sesión</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit(credentials);
        }}
      >
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
      <Link to="/registro-de-usuario">Registrarse</Link>
    </div>
  );
}
