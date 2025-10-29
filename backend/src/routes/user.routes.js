import { Router } from "express";
import {  requireAuth } from '@clerk/express'
const router = Router();

router.get("/", requireAuth(), getAllUser)
export default router;