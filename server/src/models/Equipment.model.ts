import {
  Table,
  Model,
  Column,
  Default,
  DataType,
  BelongsTo,
  PrimaryKey,
  ForeignKey,
} from "sequelize-typescript";
import { v4 as uuidv4 } from "uuid";

import { Category } from "./Category.model";

@Table({
  tableName: "equipments",
})
export class Equipment extends Model {
  @Default(uuidv4)
  @PrimaryKey
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  id!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  description!: string;

  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  @ForeignKey(() => Category)
  categoryId: string;

  @Column({
    type: DataType.ENUM("available", "maintenance", "in-use", "retired"),
    allowNull: false,
  })
  status: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  stock: number;
  @BelongsTo(() => Category)
  category: Category;
}
