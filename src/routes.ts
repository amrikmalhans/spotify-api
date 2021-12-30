import { Router } from "express";
import { getSpotifyLogin } from "./controllers/getSpotifyLogin";
import { getSpotifyAccessToken } from "./controllers/getSpotifyAccessToken";
import { getSpotifyRefreshToken } from "./controllers/getSpotifyRefreshToken";
import { getSpotifyMe } from "./controllers/getSpotifyMe";

export const router = Router();

router.get("/token", getSpotifyAccessToken);
router.post("/refresh", getSpotifyRefreshToken);
router.get("/login/spotify", getSpotifyLogin);
router.get("/spotify/me", getSpotifyMe);
router.get("/ping", (req, res) => res.send("pong")); // for testing
