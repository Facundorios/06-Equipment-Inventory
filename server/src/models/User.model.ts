import {
  Table,
  Model,
  Column,
  Default,
  DataType,
  PrimaryKey,
} from "sequelize-typescript";
import { v4 as uuidv4 } from "uuid";
@Table({
  tableName: "users",
})
export class User extends Model {
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
  surname: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  username: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  email: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password!: string;

  @Column({
    type: DataType.ENUM("admin", "user"),
    allowNull: false,
    defaultValue: "user",
  })
  role: string;
}
