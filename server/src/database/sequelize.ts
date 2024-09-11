import { Sequelize } from "sequelize-typescript";

import {
  HOST,
  DB_NAME,
  DB_PASS,
  DB_PORT,
  DB_USER,
} from "../configuration/env/enviroments";
import { User, Equipment } from "../models";

const sequelize = new Sequelize({
  dialect: "postgres",
  username: DB_USER,
  password: DB_PASS,
  database: DB_NAME,
  port: Number(DB_PORT),
  host: HOST,
  models: [User, Equipment],
});

export default sequelize;
