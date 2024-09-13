import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { registerRequest } from "../api/auth";

export default function RegisterPage() {
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

  const handleSubmit = (e) => {
    e.preventDefault;
    registerRequest(userdata);
    navigate("/equipamientos");
  };

  return (
    <div>
      <h1>Registro de usuario</h1>
      <form onSubmit={handleSubmit}>
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
        <select name="role" onChange={handleChange}>
          <option value="">Selecciona un rol</option>
          <option value="admin">Administrador</option>
          <option value="supervisor">Supervisor</option>
        </select>
        <button type="submit">Registrarse</button>
      </form>
      <h4>Ya tienes cuenta? </h4>
      <Link to="/login">
        <button>Iniciar sesión</button>
      </Link>
    </div>
  );
}
