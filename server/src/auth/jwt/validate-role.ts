import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

import { JWT_SECRET_KEY } from "../../configuration/env/enviroments";

import { DecodedToken, ValidRoles } from "../../interfaces";

export const role = (role: ValidRoles) => {
  return (req: Request, res: Response, next: NextFunction) => {
    let token: any = req.headers["authorization"];
    token = token?.split(" ")[1];

    let decoded = jwt.verify(token, JWT_SECRET_KEY) as DecodedToken;
    if (decoded.role !== role) {
      return res.status(401).json({
        message: `No tienes permiso, debes ser un ${role.toUpperCase()}`,
      });
    }
    next();
  };
};
