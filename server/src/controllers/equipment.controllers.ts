import { Request, Response } from "express";

import { EquipmentService } from "../services/requipment.services";
import { AddEquipment, UpdateEquipment } from "../interfaces";

export class EquipmentControllers {
  public equipmentServices: EquipmentService;

  constructor() {
    this.equipmentServices = new EquipmentService();
  }

  public createEquipment = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    try {
      const equipmentData: AddEquipment = req.body;

      const newEquipment = await this.equipmentServices.createEquipment(
        equipmentData
      );
      res.status(201).json({ newEquipment });
    } catch (error) {
      res.json(error);
    }
  };
}
