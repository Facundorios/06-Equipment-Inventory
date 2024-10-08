import axios from "axios";
import {
  AddEquipment,
  UpdateEquipment,
} from "./interfaces/equipment.interfaces";

export const getEquipmentsRequest = async () => {
  try {
    const response = await axios.get("http://localhost:4000/api/equipment", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getEquipmentRequest = async (id: string) => {
  try {
    const response = await axios.get(
      `http://localhost:4000/api/equipment/${id}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const createEquipmentRequest = async (equipment: AddEquipment) => {
  try {
    const response = await axios.post(
      "http://localhost:4000/api/equipment/create",
      equipment,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    console.log({ response });
    return response.data;
  } catch (error) {
    console.log({ error });
  }
};

export const deleteEquipmentRequest = async (id: string) => {
  try {
    const response = await axios.delete(
      `http://localhost:4000/api/equipment/${id}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const updatedEquipmentRequest = async (
  id: string,
  data: UpdateEquipment
) => {
  try {
    const response = await axios.patch(
      `http://localhost:4000/api/equipment/${id}`,
      data,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    console.log(response);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
