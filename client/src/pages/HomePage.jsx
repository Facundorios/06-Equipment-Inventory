import { useAuth } from "../context/AuthContext";
import "../index.css";

export default function HomePage() {
  const { user, isAuthenticated } = useAuth();
  return (
    <div>
      {isAuthenticated ? (
        <>
          <h1>
            Bienvenido a la pagina Formotex, {user.name} {user.surname}{" "}
          </h1>
          <p>
            {user.role === "admin"
              ? "Eres un administrador, por lo que tienes acceso a todos los productos, puedes agregar productos y eliminarlos o editarlos"
              : "Eres un usuario supervisor, solo tienes la capacidad de ver los productos y su información correspondiente"}
          </p>
        </>
      ) : (
        <h2>
          Bienvenido, inicie sesión o registreseñ para continuar con la
          aplicación.
        </h2>
      )}
    </div>
  );
}
