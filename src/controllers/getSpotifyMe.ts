import { Request, Response } from "express";
import { fetchSpotifyMe } from "../services/fetchSpotifyMe";

// getSpotifyToken fetches the access token using the code from query string
export const getSpotifyMe = async (req: Request, res: Response) => {
  console.log(req.query.access_token);

  const data = await fetchSpotifyMe(req.query.access_token?.toString()!);

  res.status(200).send(data);
};
