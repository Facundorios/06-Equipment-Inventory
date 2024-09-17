import { Request, Response } from "express";

import { AuthServices } from "../services/auth.services";
import { CreateUser, LoginUser } from "../interfaces";

//Se crea la clase AuthControllers
export class AuthControllers {
  //Se crea una propiedad publica llamada authServices que es de tipo AuthServices
  public authServices: AuthServices;

  //Se crea el constructor de la clase AuthControllers
  constructor() {
    this.authServices = new AuthServices();
  }

  //Se crea el metodo createUser que recibe un req y un res y retorna una promesa de tipo any
  public createUser = async (req: Request, res: Response): Promise<any> => {
    try {
      const userData: CreateUser = req.body;
      console.log({ userData });
      const user = await this.authServices.createUser(userData);

      if (!user) {
        return res.status(400).json({ message: "eRROr" });
      }
      res.status(201).json(user);
    } catch (error: any) {
      console.log(error);
      res.status(500).json(error.message);
    }
  };

  //Se crea el metodo loginUser que recibe un req y un res y retorna una promesa de tipo any
  public loginUser = async (req: Request, res: Response): Promise<any> => {
    try {
      const userData: LoginUser = req.body;
      const loginUser = await this.authServices.loginUser(userData);

      if (!loginUser) {
        return res.status(404).json({ message: "User not found" });
      }

      res.status(200).json(loginUser);
    } catch (error) {
      res.status(500).json({ error });
    }
  };
}
