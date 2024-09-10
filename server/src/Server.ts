import express, { Application } from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import dotenv from "dotenv";

dotenv.config();
import { PORT } from "./configuration/env/enviroments";

import equipmentRoutes from "./routes/equipment.routes";
import userRoutes from "./routes/user.routes";

import sequelize from "./database/sequelize";

export class Server {
  //private: solo se puede acceder a la propiedad DESDE la misma clase
  private app: Application;
  private port: number;
  private host: string;

  //pool: es una conexión a la base de datos

  //contructor: se ejecuta cuando se CREA una instancia de la clase
  constructor() {
    //this: hace referencia a la misma clase
    this.app = express();
    this.port = Number(PORT);
    this.host = "localhost";

    this.initializationDatabase();
    this.middlewares();
    this.routes();
  }

  //void: no devuelve nada, solo ejecuta una acción (no retorna nada), con el Promise<void> se indica que es una promesa que no retorna nada
  private async initializationDatabase(): Promise<void> {
    try {
      await sequelize.sync();
    } catch (error) {
      console.error("Database connection error:", error);
    }
  }

  //configuración de middlewares
  private middlewares(): void {
    this.app.use(cors());
    this.app.use(morgan("dev"));
    this.app.use(helmet());
    this.app.use(express.json());
  }

  private routes(): void {
    this.app.use("/api/equipment", equipmentRoutes);
    this.app.use("/api", userRoutes);
  }

  public initializationServer() {
    this.app.listen(this.port, this.host, () => {
      console.log(`Server running on http://${this.host}:${this.port}`);
    });
  }
}
