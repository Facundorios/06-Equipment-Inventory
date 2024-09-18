export interface AddEquipment {
  name: string;
  description: string;
  status: string;
  stock: number;
  imageUrl?: string;
  categroryId?: string;
}
export interface UpdateEquipment {
  name?: string;
  description?: string;
  status?: string;
  stock?: number;
  imageUrl?: string;
  categoryId?: string;
}
