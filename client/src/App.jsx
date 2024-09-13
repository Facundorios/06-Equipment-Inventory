import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AuthProvider } from "./context/AuthContext";

import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import EquipmentsPage from "./pages/EquipmentsPage";
import EquipmentPage from "./pages/EquipmentPage";

import { ProtectedRoute } from "./ProtectedRoutes";
function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/registro-de-usuario" element={<RegisterPage />} />
            <Route path="/inicio-de-sesion" element={<LoginPage />} />
            <Route element={<ProtectedRoute />}>
              <Route
                path="/catalogo-de-equipamientos"
                element={<EquipmentsPage />}
              />
              <Route path="/equipos/:id" element={<EquipmentPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
