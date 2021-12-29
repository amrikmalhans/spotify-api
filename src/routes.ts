import { Router } from "express";
import { getSpotifyLogin } from "./controllers/getSpotifyLogin";
import { getSpotifyToken } from "./controllers/getSpotifyToken";
import { getSpotifyMe } from "./controllers/getSpotifyMe";

export const router = Router();

router.get("/token", getSpotifyToken);
router.get("/login/spotify", getSpotifyLogin);
router.get("/spotify/me", getSpotifyMe);
router.get("/ping", (req, res) => res.send("pong")); // for testing
