import { Request, Response } from "express";
import { UserServices } from "../services/user.services";
import { CreateUser } from "../interfaces";

export class UserControllers {
  public userServices: UserServices;

  constructor() {
    this.userServices = new UserServices();
  }

  public createUser = async (req: Request, res: Response): Promise<void> => {
    try {
      const userData: CreateUser = req.body;
      console.log({ userData });

      const newUser = await this.userServices.createUser(userData);
      res.status(201).json({ data: newUser });
    } catch (error: any) {
      res.json(error.message);
    }
  };
}
