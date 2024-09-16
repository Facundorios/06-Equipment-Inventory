import { Router } from "express";
import { UserController } from "../controllers/user.controllers";
import { auth } from "../auth/jwt/validate-token";
import { role } from "../auth/jwt/validate-role";
import { ValidRoles } from "../interfaces";

class UserRoutes {
  public router: Router;
  public userController: UserController;

  constructor() {
    this.userController = new UserController();

    this.router = Router();
    this.routes();
  }

  private routes(): void {
    this.router.get(
      "/",
      auth,
      role(ValidRoles.SUPERVISOR),
      this.userController.getUsers
    );
    this.router.get("/:id", this.userController.getUser);
  }
}

export default new UserRoutes().router;
