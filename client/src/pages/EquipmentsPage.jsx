import { useState } from "react";
import { Link, useParams } from "react-router-dom";

import { getEquipmentsRequest } from "../api/equipment";

import "../style/products.css";

export default function EquipmentsPage() {
  const [equipments, setEquipments] = useState([]);

  const handleClick = async () => {
    const data = await getEquipmentsRequest();
    setEquipments(data);
  };

  console.log(equipments);

  return (
    <>
      <h1>Equipments</h1>
      <button onClick={handleClick}>Get Equipments</button>
      <div className="products">
        {equipments.length !== 0 &&
          equipments.map((equipment) => (
            <div key={equipment.id} className="product-card">
              <li>
                <h2>{equipment.name}</h2>
                <p>{equipment.description}</p>
              </li>
              <img src={equipment.imageUrl} alt={equipment.name} width={100} />
              <Link to={`/equipo/${equipment.id}`}>View</Link>
            </div>
          ))}
      </div>
    </>
  );
}
