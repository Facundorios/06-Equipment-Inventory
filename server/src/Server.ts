import express, { Application } from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import dotenv from "dotenv";

import { Pool } from "pg";
dotenv.config();

import {
  HOST,
  DB_NAME,
  DB_PASS,
  PORT,
  DB_PORT,
  DB_USER,
} from "./configuration/env/enviroments";

import equipmentRoutes from "./routes/equipment.routes";

export class Server {
  //private: solo se puede acceder a la propiedad DESDE la misma clase
  private app: Application;
  private port: number;
  private host: string;

  //pool: es una conexión a la base de datos
  private pool: Pool;

  //contructor: se ejecuta cuando se CREA una instancia de la clase
  constructor() {
    //this: hace referencia a la misma clase
    this.app = express();
    this.port = Number(PORT);
    this.host = "localhost";
    this.pool = new Pool({
      host: HOST,
      port: Number(DB_PORT),
      user: DB_USER,
      password: DB_PASS,
      database: DB_NAME,
    });

    this.database();
    this.middlewares();
    this.routes();
  }

  //void: no devuelve nada, solo ejecuta una acción (no retorna nada), con el Promise<void> se indica que es una promesa que no retorna nada
  private async database(): Promise<void> {
    try {
      await this.pool.connect();
      console.log("PostgreSQL connected successfully");
    } catch (error) {
      console.error("Database connection error:", error);
    }
  }

  //configuración de middlewares
  private middlewares(): void {
    this.app.use(cors());
    this.app.use(morgan("dev"));
    this.app.use(helmet());
  }

  private routes(): void {
    this.app.use("/api/equipment", equipmentRoutes);
  }

  public initialization() {
    this.app.listen(this.port, this.host, () => {
      console.log(`Server running on http://${this.host}:${this.port}`);
    });
  }
}
