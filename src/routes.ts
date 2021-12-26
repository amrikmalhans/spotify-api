import { Router } from "express";
import { getHello } from "./controllers/getHello";

export const router = Router();

router.get("/hello", getHello);
