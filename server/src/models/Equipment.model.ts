import {
  Table,
  Model,
  Column,
  Default,
  DataType,
  BelongsTo,
  PrimaryKey,
  ForeignKey,
  AllowNull,
} from "sequelize-typescript";
import { v4 as uuidv4 } from "uuid";

import { User, Category } from "./";
import { ValidStatus } from "../interfaces";
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
  description!: string;

  @Column({
    type: DataType.ENUM(
      ValidStatus.AVAILABLE,
      ValidStatus.IN_USE,
      ValidStatus.MAINTENANCE,
      ValidStatus.RETIRED
    ),
    allowNull: false,
  })
  status: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  stock: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  imageUrl: string;

  @ForeignKey(() => User)
  userId: string;

  @ForeignKey(() => Category)
  categoryId: string;

  @BelongsTo(() => Category)
  category: Category;

  @BelongsTo(() => User)
  user: User;
}
