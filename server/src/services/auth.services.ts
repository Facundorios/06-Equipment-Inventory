import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

import { CreateUser, LoginUser } from "../interfaces";
import { User } from "../models";

import { JWT_SECRET_KEY } from "../configuration/env/enviroments";

export class AuthServices {
  async createUser(user: CreateUser) {
    try {
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
    } catch (error) {
      throw new Error("EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEO");
    }
  }

  async loginUser(user: LoginUser) {
    const exists = await User.findOne({
      where: {
        username: user.username,
      },
    });
    if (!exists) return null;

    const valid = bcrypt.compareSync(user.password, exists.password);
    if (!valid) return null;

    const token = jwt.sign(
      { id: exists.id, role: exists.role },
      JWT_SECRET_KEY,
      {
        expiresIn: "1h",
      }
    );
    return { exists, token };
  }
}
