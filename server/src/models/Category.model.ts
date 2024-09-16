import {
  Table,
  Model,
  Column,
  Default,
  DataType,
  PrimaryKey,
  HasMany,
} from "sequelize-typescript";
import { v4 as uuidv4 } from "uuid";

import { Equipment } from "./";

@Table({
  tableName: "categories",
})
export class Category extends Model {
  @Default(uuidv4)
  @PrimaryKey
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  id: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  description: string;

  @HasMany(() => Equipment)
  equipment: Equipment[];
}
