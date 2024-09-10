import { User } from "../models/User.model";
import { CreateUser, LoginUser } from "../interfaces";

export class UserServices {
  async createUser(user: CreateUser) {
    return await User.create({ ...user });
  }
}
