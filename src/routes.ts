import { Router } from "express";
import { getSpotifyLogin } from "./controllers/getSpotifyLogin";
import { getSpotifyAccessToken } from "./controllers/getSpotifyAccessToken";
import { getSpotifyRefreshToken } from "./controllers/getSpotifyRefreshToken";
import { getSpotifyMe } from "./controllers/getSpotifyMe";
import { getUser } from "./controllers/getUser";
import { postUser } from "./controllers/postUser";
import { getUserTopArtists } from "./controllers/getUserTopArtists";

export const router = Router();

router.get("/token", getSpotifyAccessToken);
router.post("/refresh", getSpotifyRefreshToken);
router.get("/login/spotify", getSpotifyLogin);
router.get("/spotify/me", getSpotifyMe);
router.get("/user", getUser);
router.post("/user", postUser);
router.get("/top/artists", getUserTopArtists);
router.get("/ping", (req, res) => res.send("pong")); // for testing
