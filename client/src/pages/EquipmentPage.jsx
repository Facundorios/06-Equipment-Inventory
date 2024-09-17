import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { getEquipmentRequest } from "../api/equipment";
import { getCategoryByIdRequest } from "../api/category";
import "../style/product.css";

export default function EquipmentPage() {
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
        </>
      )}
    </div>
  );
}
