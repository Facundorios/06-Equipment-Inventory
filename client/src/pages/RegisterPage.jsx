import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { registerRequest } from "../api/auth";
import { useAuth } from "../context/AuthContext";

export default function RegisterPage() {
  const { register } = useAuth();

  const navigate = useNavigate();
  const [userdata, setUserdata] = useState({
    name: "",
    surname: "",
    username: "",
    email: "",
    password: "",
    role: "",
  });

  const handleChange = (e) => {
    setUserdata({
      ...userdata,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async () => {
    register(userdata);
  };

  return (
    <div>
      <h1>Registro de usuario</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit(userdata);
        }}
      >
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
          <option value="default" disabled>
            Seleccione un rol
          </option>
          <option value="admin">Administrador</option>
          <option value="supervisor">Supervisor</option>
        </select>
        <button type="submit">Registrarse</button>
      </form>
      <Link to="/inicio-de-sesion">Iniciar sesión</Link>
    </div>
  );
}
