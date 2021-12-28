import { Router } from "express";
import { getSpotifyLogin } from "./controllers/getSpotifyLogin";
import { getSpotifyToken } from "./controllers/getSpotifyToken";

export const router = Router();

router.get("/", getSpotifyToken);
router.get("/login/spotify", getSpotifyLogin);
