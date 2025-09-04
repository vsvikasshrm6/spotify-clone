import { Router } from "express";
import { callback } from "../controller/auth.controller";
const router = Router();

router.get("/callback", callback);

export default router;