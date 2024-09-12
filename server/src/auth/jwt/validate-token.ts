import { Request, Response, NextFunction } from "express";

export const auth = async (req: Request, res: Response, next: NextFunction) => {
  if (!req.headers.authorization) {
    return res.status(401).json({ message: "No estas autenticado." });
  }
  let token = req.headers.authorization;
  token = token.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "No estas autenticado." });
  }

  next();
};
