import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AuthProvider } from "./context/AuthContext";

import HomePage from "./pages/HomePage";

import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";

import EquipmentsPage from "./pages/EquipmentsPage";
import EquipmentPage from "./pages/EquipmentPage";
import CreateEquipmentPage from "./pages/CreateEquipmentPage";
import EditEquipmentPage from "./pages/EditEquipmentPage";

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
                  path="/agregar-producto"
                  element={<CreateEquipmentPage />}
                />
                <Route
                  path="/catalogo-de-equipos"
                  element={<EquipmentsPage />}
                />
                <Route path="/equipo/:id" element={<EquipmentPage />} />
                <Route
                  path="/editar-equipo/:id"
                  element={<EditEquipmentPage />}
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
