import { Request, Response } from "express";

import { EquipmentService } from "../services/requipment.services";
import { AddEquipment, UpdateEquipment } from "../interfaces";

export class EquipmentControllers {
  public equipmentServices: EquipmentService;

  constructor() {
    this.equipmentServices = new EquipmentService();
  }

  public getEquipments = async (req: Request, res: Response): Promise<any> => {
    try {
      const equipments = await this.equipmentServices.getEquipments();
      res.status(200).json({ equipments });
    } catch (error) {
      res.status(500).json({ error });
    }
  };

  public createEquipment = async (
    req: Request,
    res: Response
  ): Promise<any> => {
    try {
      const equipmentData: AddEquipment = req.body;

      const newEquipment = await this.equipmentServices.createEquipment(
        equipmentData
      );
      res.status(201).json({ newEquipment });
    } catch (error) {
      res.status(500).json(error);
    }
  };

  public getEquipmentById = async (
    req: Request,
    res: Response
  ): Promise<any> => {
    try {
      const id: string = req.params.id;
      const equipment = await this.equipmentServices.getEquipmentById(id);

      if (!equipment) {
        return res.status(404).json({ msg: "Equipment not found" });
      }
      res.status(200).json({ equipment });
    } catch (error) {
      res.status(500).json({ error });
    }
  };

  public updateEquipment = async (
    req: Request,
    res: Response
  ): Promise<any> => {
    try {
      const id: string = req.params.id;
      const equipmentData: UpdateEquipment = req.body;

      const updatedEquipment = await this.equipmentServices.updateEquipment(
        id,
        equipmentData
      );

      res.status(200).json({ updatedEquipment });
    } catch (error) {
      res.status(500).json({ error });
    }
  };
}
