import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

import { JWT_SECRET_KEY } from "../../configuration/env/enviroments";
import { UserServices } from "../../services/user.services";
import { User } from "../../models";

declare global {
  namespace Express {
    interface Request {
      user: User;
    }
  }
}

export const auth = async (req: Request, res: Response, next: NextFunction) => {
  if (!req.headers.authorization)
    return res.status(401).json({ message: "No estas autenticado." });

  let token = req.headers.authorization;
  token = token.split(" ")[1];

  console.log({ token });
  console.log(JWT_SECRET_KEY);
  const verif = jwt.verify(token, JWT_SECRET_KEY) as JwtPayload;

  if (!verif) return res.status(401).json({ message: "Token no valido." });

  let user = await new UserServices().getUserById(verif.id);
  if (!user) return res.status(401).json({ message: "Usuario no encontrado." });

  req.user = user;
  next();
};
