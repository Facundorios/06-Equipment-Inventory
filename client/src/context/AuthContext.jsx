import { useContext, createContext, useState } from "react";
import { loginRequest, registerRequest } from "../api/auth";
import axios from "axios";

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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const register = async (user) => {
    try {
      await registerRequest(user);
      setUser(user);
      setIsAuthenticated(true);
    } catch (error) {
      setError(error);
      console.log(error);
    }
  };

  const login = async (user) => {
    try {
      await loginRequest(user);
      setUser(user);
      setIsAuthenticated(true);
    } catch (error) {
      setError(error);
      console.log(error);
    }
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    delete axios.defaults.headers.common["Authorization"];
  };

  return (
    <AuthContext.Provider
      value={{ register, login, logout, isAuthenticated, user }}
    >
      {children}
    </AuthContext.Provider>
  );
};
