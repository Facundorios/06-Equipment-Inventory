import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

import { createEquipmentRequest } from "../api/equipment";
import { getCategoriesRequest } from "../api/category";

import "../style/form.css";

export default function FormEquipmentPage() {
  const [categories, setCategories] = useState([]);
  const [equipment, setEquipment] = useState({
    name: "",
    stock: 0,
    status: "",
    imageUrl: "",
    categoryId: "",
    description: "",
  });

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        await getCategoriesRequest().then((response) => {
          setCategories(response);
        });
      } catch (error) {
        console.error(error);
      }
    };
    fetchCategories();
  }, []);

  const handleChange = (event) => {
    setEquipment({
      ...equipment,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await createEquipmentRequest(equipment).then((response) => {
        console.log({ equipment, response });
        Swal.fire({
          icon: "success",
          title: "Equipo creado correctamente",
          showConfirmButton: false,
          timer: 1500,
        });
        setEquipment({
          name: "",
          stock: 0,
          status: "",
          imageUrl: "",
          categoryId: "",
          description: "",
        });
      });
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Error al crear el equipo",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div>
      <h1>Añadir Equipo</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nombre</label>
        <input
          type="text"
          id="name"
          name="name"
          value={equipment.name}
          onChange={handleChange}
        />
        <label htmlFor="stock">Stock</label>
        <input
          type="number"
          id="stock"
          name="stock"
          value={equipment.stock}
          onChange={handleChange}
        />

        <label htmlFor="status">Estado</label>
        <select
          name="status"
          id="status"
          value={equipment.status}
          onChange={handleChange}
        >
          <option value="available">Disponible</option>
          <option value="in-use">En uso</option>
          <option value="retired">Retirado</option>
          <option value="maintenance">En mantenimiento</option>
        </select>

        <label htmlFor="description">Descripción</label>
        <input
          type="text"
          id="description"
          name="description"
          value={equipment.description}
          onChange={handleChange}
        />
        <label htmlFor="imageUrl">Imagen</label>
        <input
          type="text"
          id="imageUrl"
          name="imageUrl"
          value={equipment.imageUrl}
          onChange={handleChange}
        />
        <label htmlFor="categoryId">Categoría</label>
        <select
          name="categoryId"
          id="categoryId"
          value={equipment.categoryId}
          onChange={handleChange}
        >
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>

        <button type="submit">Crear</button>
      </form>
    </div>
  );
}
