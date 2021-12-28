import { Request, Response } from "express";
import { fetchLoginInfo } from "../services/SpotifyAuth/fetchLoginInfo";

// getSpotifyLogin redirects to spotify login page
export const getSpotifyLogin = async (req: Request, res: Response) => {
  fetchLoginInfo(req, res);
};
