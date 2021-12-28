import { Request, response, Response } from "express";
import { fetchToken } from "../services/SpotifyAuth/fetchToken";
import { spotifyAuthValidationSchema } from "../utils/validation";

// getSpotifyToken fetches the access token using the code from query string
export const getSpotifyToken = async (req: Request, res: Response) => {
  const validate = spotifyAuthValidationSchema.validate(req.query);

  if (validate.error) {
    res.status(400).send(validate.error.details[0].message);
    return;
  }

  const { code } = validate.value;

  const tokenData = await fetchToken(code);

  if (tokenData.isErr()) {
    res.status(404).send(tokenData.error);
    return;
  }

  res.status(200).send(tokenData.value);
};
