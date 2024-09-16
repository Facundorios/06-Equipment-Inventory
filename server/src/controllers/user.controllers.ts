import { Request, Response } from "express";

import { UserServices } from "../services/user.services";

export class UserController {
  public userServices: UserServices;

  constructor() {
    this.userServices = new UserServices();
  }

  public getUsers = async (req: Request, res: Response): Promise<any> => {
    try {
      const users = await this.userServices.getAllUsers();
      if (users.length === 0)
        res.status(404).json({ message: "Users not found" });

      res.status(200).json({ users });
    } catch (error: any) {
      res.status(500).json({ error });
    }
  };

  public getUser = async (req: Request, res: Response): Promise<any> => {
    try {
      const id: string = req.params.id;
      console.log({ id });

      const user = await this.userServices.getUserById(id);
      if (!user) res.status(404).json({ message: "User not found" });

      res.status(200).json({ user });
    } catch (error) {
      res.status(500).json({ error });
    }
  };
}
