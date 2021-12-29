import dontenv from "dotenv";

dontenv.config();

export const fetchLoginInfo = async () => {
  const scope = "user-top-read";

  const URL = `https://accounts.spotify.com/authorize?client_id=${process.env.SPOTIFY_CLIENT_ID}&response_type=code&redirect_uri=${process.env.SPOTIFY_REDIRECT_URI}&scope=${scope}`;
  return URL;
};
