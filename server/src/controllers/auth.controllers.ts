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

  //Se crea el metodo createUser que recibe un req y un res y retorna una promesa de tipo void
  public createUser = async (req: Request, res: Response): Promise<void> => {
    try {
      const userData: CreateUser = req.body;
      console.log({ userData });

      const newUser = await this.authServices.createUser(userData);
      res.status(201).json({ data: newUser });
    } catch (error: any) {
      res.json(error);
    }
  };

  //Se crea el metodo loginUser que recibe un req y un res y retorna una promesa de tipo voids
  public loginUser = async (req: Request, res: Response): Promise<void> => {
    try {
      const userData: LoginUser = req.body;
      const loginUser = await this.authServices.loginUser(userData);

      res.status(200).json({ data: loginUser });
    } catch (error) {
      res.json(error);
    }
  };
}
