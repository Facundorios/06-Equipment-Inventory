import { Router, Request, Response } from "express";

class EquipmentRoutes {
  public router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  private routes(): void {
    this.router.get("/get-all", (req: Request, res: Response) => {
      res.send("Equipments");
    });
  }
}

export default new EquipmentRoutes().router;
