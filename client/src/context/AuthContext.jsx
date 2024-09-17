import { useContext, createContext, useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";

import { loginRequest, registerRequest } from "../api/auth";

// Se crea el contexto de autenticación
const AuthContext = createContext();

// Se exporta el contexto
export const useAuth = () => {
  // Se obtiene el contexto de autenticación
  const context = useContext(AuthContext);
  // Si no se encuentra el contexto, se lanza un error
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return useContext(AuthContext);
};

// Se crea el proveedor de autenticación
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const register = async (user) => {
    try {
      const response = await registerRequest(user);
      console.log(response);
      if (response.status == 201) {
        Swal.fire({
          icon: "success",
          title: "Usuario registrado",
          text: "El usuario ha sido registrado correctamente",
        });
        console.log(response.data);
        setUser(response.data.user);
        setIsAuthenticated(true);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        localStorage.setItem("token", response.data.token);
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Ha ocurrido un error al registrar el usuario",
      });
      setError(error);
      console.log(error);
    }
  };

  const login = async (user) => {
    try {
      const response = await loginRequest(user);
      if (response.status == 200) {
        Swal.fire({
          icon: "success",
          title: "Inicio de sesión",
          text: "El usuario ha iniciado sesión correctamente",
        });
        setUser(response.data.exists);
        setIsAuthenticated(true);
        localStorage.setItem("user", JSON.stringify(response.data.exists));
        localStorage.setItem("token", response.data.token);
      }
    } catch (error) {
      setError(error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Ha ocurrido un error al iniciar sesión",
      });
      console.log(error);
    }
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    delete axios.defaults.headers.common["Authorization"];
    Swal.fire({
      icon: "success",
      title: "Sesión cerrada",
      text: "La sesión ha sido cerrada correctamente",
    });
  };

  return (
    <AuthContext.Provider
      value={{ register, login, logout, isAuthenticated, user }}
    >
      {children}
    </AuthContext.Provider>
  );
};
