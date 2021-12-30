import { Request, Response } from "express";
import { fetchAccessToken } from "../services/SpotifyAuth/fetchAccessToken";
import { spotifyAuthValidationSchema } from "../utils/validation";

// getSpotifyAccessToken fetches the access token using the code from query string
export const getSpotifyAccessToken = async (req: Request, res: Response) => {
  const validate = spotifyAuthValidationSchema.validate(req.query);

  if (validate.error) {
    res.status(400).send(validate.error.details[0].message);
    return;
  }

  const { code } = validate.value;

  if (req.cookies.access_token) {
    res.status(218).send("Already have an access token");
    return;
  }

  const tokenData = await fetchAccessToken(code);

  if (tokenData.isErr()) {
    res.status(404).send(tokenData.error);
    return;
  }

  res.cookie("token_data", tokenData.value, {
    maxAge: tokenData.value.expires_in * 1000,
    httpOnly: true,
  });

  res.status(200).send(tokenData.value);
};
