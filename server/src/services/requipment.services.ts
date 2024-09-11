import { AddEquipment } from "../interfaces/add-equipment.interface";

import { Equipment } from "../models";

export class EquipmentService {
  async createEquipment(equipment: AddEquipment) {
    const newEquipment = await Equipment.create({
      ...equipment,
    });
    return newEquipment;
  }
}
