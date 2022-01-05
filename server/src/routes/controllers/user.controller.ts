import { Request, Response } from "express";

export const getUserController = async (req: Request, res: Response) => {
  return res.send("user");
};
