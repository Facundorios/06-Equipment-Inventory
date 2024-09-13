import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./context/AuthContext";

export function ProtectedRoute() {
  const { loading, isAuthenticated } = useAuth();

  if (loading) return <h1>Loading..</h1>;
  if (!loading && !isAuthenticated) {
    return <Navigate to="/inicio-de-sesion" replace />;
  }
  return <Outlet />;
}
