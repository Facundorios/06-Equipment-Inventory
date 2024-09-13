import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

import { CreateUser, LoginUser } from "../interfaces";
import { User } from "../models";

import { JWT_SECRET_KEY } from "../configuration/env/enviroments";

export class AuthServices {
  async createUser(user: CreateUser) {
    const newUser = await User.create({
      ...user,
      password: bcrypt.hashSync(user.password, 8),
    });

    const token = jwt.sign(
      { id: newUser.id, role: newUser.role },
      JWT_SECRET_KEY,
      {
        expiresIn: "1h",
      }
    );
    return { newUser, token };
  }

  async loginUser(user: LoginUser) {
    const exists = await User.findOne({
      where: {
        username: user.username,
      },
    });
    if (!exists) return { message: "User not found" };

    const valid = bcrypt.compareSync(user.password, exists.password);
    if (!valid) return { message: "Invalid password" };

    const token = jwt.sign(
      { id: exists.id, role: exists.role },
      JWT_SECRET_KEY,
      {
        expiresIn: "1h",
      }
    );
    return { token };
  }
}
