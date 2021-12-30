import axios from "axios";
import { err, ok } from "neverthrow";
import qs from "qs";

export const fetchRefreshToken = async (refreshToken: string) => {
  const data = qs.stringify({
    grant_type: "refresh_token",
    refresh_token: refreshToken,
  });

  const response = await axios.post<TokenData>(
    "https://accounts.spotify.com/api/token",
    data,
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Basic ${Buffer.from(
          process.env.SPOTIFY_CLIENT_ID +
            ":" +
            process.env.SPOTIFY_CLIENT_SECRET
        ).toString("base64")}`,
      },
    }
  );

  if (response.status !== 200) {
    return err(response.statusText);
  }

  return ok(response.data);
};

interface TokenData {
  access_token: string;
  expires_in: number;
  refresh_token?: string;
  scope: string;
  token_type: string;
}
