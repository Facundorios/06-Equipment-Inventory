import { Router, Request, Response } from "express";

import { EquipmentControllers } from "../controllers/equipment.controllers";

class EquipmentRoutes {
  public router: Router;
  public equipmentControllers: EquipmentControllers;

  constructor() {
    this.equipmentControllers = new EquipmentControllers();

    this.router = Router();
    this.routes();
  }

  private routes(): void {
    this.router.post("/create", this.equipmentControllers.createEquipment);
  }
}

export default new EquipmentRoutes().router;
