import dontenv from "dotenv";
import { Request, Response } from "express";

dontenv.config();

export const fetchLoginInfo = async (req: Request, res: Response) => {
  const scope = "user-read-private user-read-email";
  res.redirect(
    `https://accounts.spotify.com/authorize?client_id=${process.env.SPOTIFY_CLIENT_ID}&response_type=code&redirect_uri=${process.env.SPOTIFY_REDIRECT_URI}&scope=${scope}`
  );
};
