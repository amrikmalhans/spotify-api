import { Request, Response } from "express";
import { fetchLoginInfo } from "../services/SpotifyAuth/fetchLoginInfo";

// getSpotifyLogin redirects to spotify login page
export const getSpotifyLogin = async (req: Request, res: Response) => {
  const URL = await fetchLoginInfo();

  res.status(200).send(URL);
};
