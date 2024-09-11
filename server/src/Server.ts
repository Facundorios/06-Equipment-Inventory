import express, { Application } from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import "dotenv/config";

//Importaciones y configuraciones para las variables de entorno.
import { HOST, PORT } from "./configuration/env/enviroments";

//Importaciones de las rutas
import equipmentRoutes from "./routes/equipment.routes";
import categoryRoutes from "./routes/category.routes";

import userRoutes from "./routes/user.routes";
//Importació de la conexión a la base de datos
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
    this.host = HOST;

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

  //Configuración de las rutas
  private routes(): void {
    this.app.use("/api/equipment", equipmentRoutes);
    this.app.use("/api/auth", userRoutes);
    this.app.use("/api/category", categoryRoutes);
  }

  //Inicialización del servidor
  public initializationServer() {
    this.app.listen(this.port, this.host, () => {
      console.log(`Server running on http://${this.host}:${this.port}`);
    });
  }
}
