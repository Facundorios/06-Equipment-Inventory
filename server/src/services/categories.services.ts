import { Category } from "../models";

export class CategoriesServices {
  async getAllCategories() {
    return await Category.findAll();
  }

  async getCategoryById(id: string) {
    return await Category.findByPk(id);
  }
}
