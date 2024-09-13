import { BrowserRouter, Routes, Route } from "react-router-dom";

import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import EquipmentsPage from "./pages/EquipmentsPage";
import EquipmentPage from "./pages/EquipmentPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/registro-de-usuario" element={<RegisterPage />} />
          <Route path="/inicio-de-sesion" element={<LoginPage />} />
          <Route
            path="/catalogo-de-equipamientos"
            element={<EquipmentsPage />}
          />
          <Route path="/equipos/:id" element={<EquipmentPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
