import { Request, Response, NextFunction } from "express";

import { ValidRoles } from "../../interfaces";

export const role = (role: ValidRoles) => {
  return (req: Request, res: Response, next: NextFunction) => {
    let user = req.user;

    if (user.role !== role)
      return res.status(403).json({ message: "No tienes permisos." });

    next();
  };
};
