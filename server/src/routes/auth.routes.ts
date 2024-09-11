import { Router } from "express";
import { AuthControllers } from "../controllers/auth.controllers";

//Se crea la clase AuthRoutes
class AuthRoutes {
  //public: se puede acceder a la propiedad desde cualquier parte del código
  public router: Router;
  public authController: AuthControllers;

  //constructor: se ejecuta cuando se CREA una instancia de la clase
  constructor() {
    this.authController = new AuthControllers();

    this.router = Router();
    this.routes();
  }

  //void: no devuelve nada, solo ejecuta una acción (no retorna nada)

  //private: solo se puede acceder a la propiedad DESDE la misma clase
  private routes(): void {
    this.router.post("/register", this.authController.createUser);
    this.router.post("/login", this.authController.loginUser);
  }
}

//Se exporta una instancia de la clase AuthRoutes, para poder acceder a la propiedad router
export default new AuthRoutes().router;
