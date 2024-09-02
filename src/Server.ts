import express, { Application } from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";

import equipmentRoutes from "./routes/equipment.routes";

export class Server {
  //private: solo se puede acceder a la propiedad DESDE la misma clase
  private app: Application;
  private port: number;
  private host: string;

  //contructor: se ejecuta cuando se CREA una instancia de la clase
  constructor() {
    //this: hace referencia a la misma clase
    this.app = express();
    this.port = 3000;
    this.host = "localhost";

    this.database();
    this.middlewares();
    this.routes();
  }

  //void: no devuelve nada, solo ejecuta una acción (no retorna nada)
  private database(): void {
    console.table(["MongoDB", "Connected"]);
  }

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
