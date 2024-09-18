import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Swal from "sweetalert2";

import { useAuth } from "../context/AuthContext";

import { getEquipmentRequest, deleteEquipmentRequest } from "../api/equipment";
import { getCategoryByIdRequest } from "../api/category";
import "../style/product.css";

export default function EquipmentPage() {
  const { user } = useAuth();
  const { id } = useParams();
  const [equipment, setEquipment] = useState(null);
  const [category, setCategory] = useState(null);

  useEffect(() => {
    getEquipmentRequest(id).then((response) => {
      setEquipment(response.equipment);
    });
  }, [id]);

  useEffect(() => {
    if (equipment) {
      getCategoryByIdRequest(equipment.categoryId).then((response) => {
        setCategory(response);
      });
    }
  }, [equipment]);

  const handleDelete = () => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "Una vez eliminado, no se podrá recuperar",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteEquipmentRequest(id).then((response) => {
          if (response.status === 204) {
            Swal.fire("Eliminado", "El equipo ha sido eliminado", "success");
          }
          window.location.href = "/catalogo-de-equipos";
        });
      }
    });
  };

  return (
    <div className="product">
      {equipment && category && (
        <>
          <h1>{equipment.name}</h1>
          <strong>{equipment.id}</strong>
          <img src={equipment.imageUrl} alt={equipment.name} />
          <div className="info-list">
            <p>Category: {category.name.toUpperCase(0)}</p>
            <p>Stock: {equipment.stock}</p>
            <p>status: {equipment.status}</p>
            <p>Description: {equipment.description}</p>
          </div>
          {user.role === "admin" ? (
            <>
              <button onClick={handleDelete}>Eliminar</button>
              <Link to={`/editar-equipo/${equipment.id}`}>Editar</Link>
            </>
          ) : null}
        </>
      )}
    </div>
  );
}
