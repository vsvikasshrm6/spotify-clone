import { Router } from "express";
import {  requireAuth } from '@clerk/express'

const router = Router();

router.post("/song", requireAuth(),  createSong)

export default router;