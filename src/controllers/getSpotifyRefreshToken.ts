import { Request, Response } from "express";
import { fetchRefreshToken } from "../services/SpotifyAuth/fetchRefreshToken";
import { spotifyAuthTokenValidationSchema } from "../utils/validation";

export const getSpotifyRefreshToken = async (req: Request, res: Response) => {
  const validate = spotifyAuthTokenValidationSchema.validate(req.cookies);

  if (validate.error) {
    res.status(400).send(validate.error.details[0].message);
    return;
  }

  const { refresh_token } = validate.value;

  const tokenData = await fetchRefreshToken(refresh_token);

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
