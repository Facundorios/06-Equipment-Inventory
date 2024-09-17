import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useAuth } from "../context/AuthContext";
import "../style/form.css";

export default function RegisterPage() {
  const { register, isAuthenticated } = useAuth();

  const navigate = useNavigate();
  const [user, setuser] = useState({
    name: "",
    surname: "",
    username: "",
    email: "",
    password: "",
    role: "",
  });

  useEffect(() => {
    if (isAuthenticated) navigate("/catalogo-de-equipos ");
  }, [isAuthenticated]);

  const handleChange = (e) => {
    setuser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async () => {
    register(user);
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit(user);
        }}
      >
        <h1>Registro de usuario</h1>
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          onChange={handleChange}
        />
        <input
          type="text"
          name="surname"
          placeholder="Apellido"
          onChange={handleChange}
        />
        <input
          type="text"
          name="username"
          placeholder="Nombre de usuario"
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Correo electrónico"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          onChange={handleChange}
        />
        <select
          name="role"
          onChange={handleChange}
          defaultValue="default"
          required
        >
          <option defaultValue={"admin"} disabled>
            Seleccione un rol
          </option>
          <option value="admin">Administrador</option>
          <option value="supervisor">Supervisor</option>
        </select>
        <button type="submit">Registrarse</button>
      </form>
      <Link to="/inicio-de-sesion">
        <button>Iniciar sesión</button>
      </Link>
    </div>
  );
}
