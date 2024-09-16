import { Sequelize } from "sequelize-typescript";

import {
  HOST,
  DB_NAME,
  DB_PASS,
  DB_PORT,
  DB_USER,
} from "../configuration/env/enviroments";

import { categoriesData, equipmentData } from "./data";

import { Category, User, Equipment } from "../models";

const sequelize = new Sequelize({
  dialect: "postgres",
  username: DB_USER,
  password: DB_PASS,
  database: DB_NAME,
  port: Number(DB_PORT),
  host: HOST,
  models: [Category, Equipment, User],
});

//Carga inicial de equipos y categorias en la base de datos
sequelize.sync().then(async () => {
  const categories = await Category.findAll();
  if (categories.length === 0) {
    Promise.all(
      categoriesData.map(async (category) => {
        await Category.create(category);
      })
    );
  }

  const equipments = await Equipment.findAll();
  if (equipments.length === 0) {
    Promise.all(
      equipmentData.map(async (equipment) => {
        const category = await Category.findOne({
          where: { name: equipment.categoryName },
        });
        await Equipment.create({ ...equipment, categoryId: category?.id });
      })
    );
  }
});

export default sequelize;
