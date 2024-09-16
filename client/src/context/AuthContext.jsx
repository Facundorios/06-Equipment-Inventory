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
  const [error, setError] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const register = async (user) => {
    try {
      const response = await registerRequest(user);
      if (response.status == 201) {
        console.log({ DATAAA: response.data });
        setUser(response.data);
        setIsAuthenticated(true);
      }
    } catch (error) {
      alert(error);
      setError(error);
      console.log(error);
    }
  };

  const login = async (user) => {
    try {
      const response = await loginRequest(user);
      if (response.status == 200) {
        setUser(response.data.exists);
        setIsAuthenticated(true);
      }
    } catch (error) {
      alert(error);
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
