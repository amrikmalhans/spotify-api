import { err, ok } from "neverthrow";

export const fetchUserTopArtists = async (access_token: string) => {
  const data = await fetch("https://api.spotify.com/v1/me/top/artists", {
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
