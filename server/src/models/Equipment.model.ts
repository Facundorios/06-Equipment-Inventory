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

import { User, Category } from "./";
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
    type: DataType.ENUM("available", "maintenance", "in-use", "retired"),
    allowNull: false,
  })
  status: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  stock: number;

  @ForeignKey(() => User)
  userId: string;

  @ForeignKey(() => Category)
  categoryId: string;

  @BelongsTo(() => Category)
  category: Category;

  @BelongsTo(() => User)
  user: User;
}
