import { Request, Response } from "express";
import { fetchUserTopArtists } from "../services/fetchUserTopArtists";
import { spotifyAcessTokenCookiesValidationSchema } from "../utils/validation";

export const getUserTopArtists = async (req: Request, res: Response) => {
  const validate = spotifyAcessTokenCookiesValidationSchema.validate(
    req.cookies
  );

  if (validate.error) {
    res.status(400).send(validate.error.details[0].message);
    return;
  }

  const { token_data } = validate.value;

  const topArtists = await fetchUserTopArtists(token_data.access_token);

  if (topArtists.isErr()) {
    res.status(404).send("Error fetching user top artists");
    return;
  }

  res.status(200).send(topArtists.value);
};
