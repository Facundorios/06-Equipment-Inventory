import { useContext, createContext, useState } from "react";
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
//

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const register = async (userdata) => {
    try {
      await registerRequest(userdata);
      setUser(userdata);
      setIsAuthenticated(true);
      console.log(res.data);
    } catch (error) {
      setError(error);
      console.log(error);
    }
  };

  const login = async (credentials) => {
    try {
      await loginRequest(credentials);
      setUser(credentials);
      setIsAuthenticated(true);
    } catch (error) {
      setError(error);
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider value={{ register, login }}>
      {children}
    </AuthContext.Provider>
  );
};
