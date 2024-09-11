import { Sequelize, BelongsTo, HasMany } from "sequelize-typescript";

import {
  HOST,
  DB_NAME,
  DB_PASS,
  DB_PORT,
  DB_USER,
} from "../configuration/env/enviroments";

import { categories } from "../data/categories";

import { Category, User, Equipment } from "../models";

const sequelize = new Sequelize({
  dialect: "postgres",
  username: DB_USER,
  password: DB_PASS,
  database: DB_NAME,
  port: Number(DB_PORT),
  host: HOST,
  models: [User, Equipment, Category],
});

sequelize.sync().then(async () => {
  const categoriesData = await Category.findAll();
  if (categoriesData.length === 0) {
    categories.forEach(async (category) => {
      await Category.create(category);
    });
  }
});

export default sequelize;
