import { Request, Response } from "express";

export const getHello = async (req: Request, res: Response) => {
  res.send("Hello World!");
};
