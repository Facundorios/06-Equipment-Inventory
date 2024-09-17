import axios from "axios";

export const getCategoryByIdRequest = async (categoryId: string) => {
  try {
    const response = await axios.get(
      `http://localhost:4000/api/category/${categoryId}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getCategoriesRequest = async () => {
  try {
    const response = await axios.get(`http://localhost:4000/api/category`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
