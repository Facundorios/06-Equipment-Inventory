import { Router, Request, Response } from "express";

import { auth } from "../auth/jwt/validate-token";
import { role } from "../auth/jwt/validate-role";

import { EquipmentControllers } from "../controllers/equipment.controllers";

import { ValidRoles } from "../interfaces";

class EquipmentRoutes {
  public router: Router;
  public equipmentControllers: EquipmentControllers;

  constructor() {
    this.equipmentControllers = new EquipmentControllers();

    this.router = Router();
    this.routes();
  }

  private routes(): void {
    this.router.post(
      "/create",
      auth,
      role(ValidRoles.ADMIN),
      this.equipmentControllers.createEquipment
    );
    this.router.get("/", this.equipmentControllers.getEquipments);
    this.router.get("/:id", this.equipmentControllers.getEquipmentById);
    this.router.patch(
      "/:id",
      auth,
      role(ValidRoles.ADMIN),
      this.equipmentControllers.updateEquipment
    );
    this.router.delete(
      "/:id",
      auth,
      role(ValidRoles.ADMIN),
      this.equipmentControllers.deleteEquipment
    );
  }
}

export default new EquipmentRoutes().router;
