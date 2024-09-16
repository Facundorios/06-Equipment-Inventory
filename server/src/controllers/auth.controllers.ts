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
      const newUser = await this.authServices.createUser(userData);
      if (newUser) {
        return res.status(400).json({ message: "User already exists" });
      }
      res.status(201).json({ data: newUser });
    } catch (error: any) {
      res.status(500).json({ error });
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

      res.status(200).json({ loginUser });
    } catch (error) {
      res.status(500).json({ error });
    }
  };
}
