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
    this.router.get("/", this.equipmentControllers.getEquipments);
    this.router.get("/:id", this.equipmentControllers.getEquipmentById);
    this.router.post("/create", this.equipmentControllers.createEquipment);
    this.router.patch("/:id", this.equipmentControllers.updateEquipment);
  }
}

export default new EquipmentRoutes().router;
