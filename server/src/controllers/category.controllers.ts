import { Request, Response } from "express";

import { CategoriesServices } from "../services/categories.services";

export class CategoriesControllers {
  public categoriesServices: CategoriesServices;

  constructor() {
    this.categoriesServices = new CategoriesServices();
  }

  public getCategories = async (req: Request, res: Response): Promise<void> => {
    try {
      const categories = await this.categoriesServices.getAllCategories();
      res.status(200).json({ categories });
    } catch (error: any) {
      res.json(error);
    }
  };
  public getCategory = async (req: Request, res: Response): Promise<void> => {
    try {
      const id: string = req.params.id;
      console.log({ id });

      const category = await this.categoriesServices.getCategoryById(id);
      res.status(200).json({ category });

      if (!category) res.status(404).json({ message: "Category not found" });
    } catch (error) {
      res.json(error);
    }
  };
}
