import { Router, Request, Response } from "express";

class EquipmentRoutes {
  //public: se puede acceder a la propiedad desde cualquier parte del código
  public router: Router;

  //constructor: se ejecuta cuando se CREA una instancia de la clase
  constructor() {
    this.router = Router();
    this.routes();
  }
  //void: no devuelve nada, solo ejecuta una acción (no retorna nada)
  //private: solo se puede acceder a la propiedad DESDE la misma clase
  private routes(): void {
    this.router.get("/get-all", (req: Request, res: Response) => {
      res.send("Equipments");
    });
  }
}

export default new EquipmentRoutes().router;
