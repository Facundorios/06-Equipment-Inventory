import { AddEquipment, UpdateEquipment } from "../interfaces";

import { Equipment } from "../models";

export class EquipmentService {
  async createEquipment(equipment: AddEquipment) {
    const newEquipment = await Equipment.create({
      ...equipment,
    });
    return newEquipment;
  }

  async getEquipments() {
    const equipments = await Equipment.findAll();
    return equipments;
  }

  async getEquipmentById(id: string) {
    const equipment = await Equipment.findByPk(id);
    return equipment;
  }

  async updateEquipment(id: string, equipment: UpdateEquipment) {
    const exists = await this.getEquipmentById(id);
    if (!exists) {
      throw new Error("Equipment not found");
    }

    await Equipment.update(equipment, {
      where: {
        id,
      },
    });

    return await this.getEquipmentById(id);
  }
}
