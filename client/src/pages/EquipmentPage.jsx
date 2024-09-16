import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { getEquipmentRequest } from "../api/equipment";
import "../style/products.css";

export default function EquipmentPage() {
  const { id } = useParams();
  const [equipment, setEquipment] = useState(null);

  useEffect(() => {
    getEquipmentRequest(id).then((response) => {
      setEquipment(response.equipment);
    });
  }, [id]);

  if (!equipment) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="card">
      <h1>Equipment Page</h1>
      <h2>{equipment.name}</h2>
      <p>{equipment.description}</p>
      <p>
        <strong>Stock:</strong> {equipment.stock}
      </p>
      <p>
        <strong>Status:</strong> {equipment.status}
      </p>
      <p>
        <strong>Category ID:</strong> {equipment.categoryId}
      </p>
      <img src={equipment.imageUrl} />
    </div>
  );
}
