import fetch from "isomorphic-fetch";
import dotnev from "dotenv";

dotnev.config();

export const fetchSpotifyMe = async (access_token: string) => {
  const data = await fetch("https://api.spotify.com/v1/me/", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${access_token}`,
    },
  });

  const artists = await data.json();
  return artists;
};
