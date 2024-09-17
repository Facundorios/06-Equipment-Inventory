import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AuthProvider } from "./context/AuthContext";

import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import EquipmentsPage from "./pages/EquipmentsPage";
import EquipmentPage from "./pages/EquipmentPage";
import CreateEquipmentPage from "./pages/CreateEquipmentPage";
import HomePage from "./pages/HomePage";

import Nav from "./components/Nav";

import { ProtectedRoute } from "./ProtectedRoutes";
function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <main>
            <Nav />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/registro-de-usuario" element={<RegisterPage />} />
              <Route path="/inicio-de-sesion" element={<LoginPage />} />

              <Route element={<ProtectedRoute />}>
                <Route
                  path="/catalogo-de-equipos"
                  element={<EquipmentsPage />}
                />
                <Route path="/equipo/:id" element={<EquipmentPage />} />
                <Route
                  path="/agregar-producto"
                  element={<CreateEquipmentPage />}
                />
              </Route>
            </Routes>
          </main>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
