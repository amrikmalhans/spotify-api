import { Request, Response } from "express";
import { fetchSpotifyMe } from "../services/fetchSpotifyMe";
import { spotifyAcessTokenCookiesValidationSchema } from "../utils/validation";

// getSpotifyToken fetches the access token using the code from query string
export const getSpotifyMe = async (req: Request, res: Response) => {
  const validate = spotifyAcessTokenCookiesValidationSchema.validate(
    req.cookies
  );

  if (validate.error) {
    res.status(400).send(validate.error.details[0].message);
    return;
  }

  const { token_data } = validate.value;

  const data = await fetchSpotifyMe(token_data.access_token);

  if (data.isErr()) {
    res.status(404).send(data.error);
    return;
  }

  res.status(200).send(data.value);
};
