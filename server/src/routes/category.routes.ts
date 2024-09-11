import { Router } from "express";
import { CategoriesControllers } from "../controllers/category.controllers";

class CategoriesRoutes {
  public router: Router;
  public CategoriesControllers: CategoriesControllers;

  constructor() {
    this.CategoriesControllers = new CategoriesControllers();

    this.router = Router();
    this.routes();
  }

  private routes(): void {
    this.router.get("/", this.CategoriesControllers.getCategories);
    this.router.get("/:id", this.CategoriesControllers.getCategory);
  }
}

export default new CategoriesRoutes().router;
