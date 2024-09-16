import { Request, Response } from "express";
import jwt from "jsonwebtoken";

import { JWT_SECRET_KEY } from "../configuration/env/enviroments";

import { EquipmentService } from "../services/equipment.services";
import { AddEquipment, DecodedToken, UpdateEquipment } from "../interfaces";

export class EquipmentControllers {
  public equipmentServices: EquipmentService;

  constructor() {
    this.equipmentServices = new EquipmentService();
  }

  public getEquipments = async (req: Request, res: Response): Promise<any> => {
    try {
      const equipments = await this.equipmentServices.getEquipments();
      res.status(200).json(equipments);
    } catch (error) {
      res.status(500).json({ error });
    }
  };

  public createEquipment = async (
    req: Request,
    res: Response
  ): Promise<any> => {
    try {
      let token: string = req.headers.authorization?.toString() || "";
      token = token?.split(" ")[1];

      const decoded = jwt.verify(token, JWT_SECRET_KEY) as DecodedToken;
      const equipmentData: AddEquipment = req.body;
      const userId: string = decoded.id;

      const equipment = await this.equipmentServices.createEquipment(
        equipmentData,
        userId
      );

      res.status(201).json({ equipment });
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

      const equipment = await this.equipmentServices.updateEquipment(
        id,
        equipmentData
      );

      res.status(200).json({ equipment });
    } catch (error) {
      res.status(500).json({ error });
    }
  };

  public deleteEquipment = async (
    req: Request,
    res: Response
  ): Promise<any> => {
    try {
      const id: string = req.params.id;
      const equipment = await this.equipmentServices.deleteEquipment(id);

      if (!equipment) {
        return res.status(404).json({ msg: "Equipment not found" });
      }
      res.status(200).json({ message: "Equipment deleted" });
    } catch (error) {
      res.status(500).json({ error });
    }
  };
}
