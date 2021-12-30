import fetch from "isomorphic-fetch";
import dotnev from "dotenv";
import { err, ok, Result } from "neverthrow";

dotnev.config();

export const fetchSpotifyMe = async (
  access_token: string
): Promise<Result<any, Error>> => {
  const data = await fetch("https://api.spotify.com/v1/me/", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${access_token}`,
    },
  });

  if (data.status !== 200) {
    return err(new Error(`Error fetching Spotify me data: ${data.status}`));
  }

  const artists = await data.json();
  return ok(artists); // need to define types for it later
};
