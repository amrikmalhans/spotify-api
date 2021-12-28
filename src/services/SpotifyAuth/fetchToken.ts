import SpotifyWebApi from "spotify-web-api-node";
import dotenv from "dotenv";
import { err, ok, Result } from "neverthrow";
import { TokenData } from "./types";

dotenv.config();

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
  redirectUri: process.env.SPOTIFY_REDIRECT_URI,
});

// fetchToken gets the access token from the Spotify API
export const fetchToken = async (
  code: string
): Promise<Result<TokenData, Error>> => {
  const auth = await spotifyApi.authorizationCodeGrant(code);

  if (auth.statusCode !== 200) {
    return err(new Error("Error fetching token"));
  }

  const { access_token, expires_in, refresh_token, scope, token_type } =
    auth.body;

  return ok({
    access_token,
    expires_in,
    refresh_token,
    scope,
    token_type,
  });
};
