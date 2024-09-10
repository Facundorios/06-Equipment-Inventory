import { Router } from "express";
import { UserControllers } from "../controllers/user.controllers";

class UserRoutes {
  //public: se puede acceder a la propiedad desde cualquier parte del código
  public router: Router;
  public user: UserControllers;

  //constructor: se ejecuta cuando se CREA una instancia de la clase
  constructor() {
    this.user = new UserControllers();

    this.router = Router();
    this.routes();

    //se instancia la clase UserControllers
  }

  //void: no devuelve nada, solo ejecuta una acción (no retorna nada)
  //private: solo se puede acceder a la propiedad DESDE la misma clase
  private routes(): void {
    this.router.post("/register", this.user.createUser);
  }
}

export default new UserRoutes().router;
