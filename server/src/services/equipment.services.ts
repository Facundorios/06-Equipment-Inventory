import { AddEquipment, UpdateEquipment } from "../interfaces";
import { Equipment } from "../models";

export class EquipmentService {
  async createEquipment(addEquipment: AddEquipment, userId: string) {
    const equipment = await Equipment.create({
      ...addEquipment,
      userId,
    });
    return equipment;
  }

  async getEquipments() {
    const equipments = await Equipment.findAll();
    return equipments;
  }

  async getEquipmentById(id: string) {
    const equipment = await Equipment.findByPk(id);
    return equipment;
  }

  async updateEquipment(id: string, updateEquipment: UpdateEquipment) {
    const equipment = await Equipment.findByPk(id);

    await Equipment.update(updateEquipment, {
      where: {
        id,
      },
    });

    return equipment;
  }

  async deleteEquipment(id: string) {
    const equipment = await Equipment.findByPk(id);

    await Equipment.destroy({
      where: {
        id,
      },
    });

    return equipment;
  }
}
