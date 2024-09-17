import { Category } from "../models";

export class CategoriesServices {
  async getAllCategories() {
    return await Category.findAll();
  }

  async getCategoryById(id: string) {
    try {
      const category = await Category.findByPk(id);
      return category;
    } catch (error) {
      throw new Error("Category not found");
    }
  }
}
