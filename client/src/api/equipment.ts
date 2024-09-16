import axios from "axios";

export const getEquipmentsRequest = async () => {
  try {
    const response = await axios.get("http://localhost:4000/api/equipment");
    return response.data;
  } catch (error) {
    console.error(error);
    return []; // En caso de error, devuelve un array vacío para evitar errores en el renderizado
  }
};

export const getEquipmentRequest = async (id: string) => {
  try {
    const response = await axios.get(
      `http://localhost:4000/api/equipment/${id}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
