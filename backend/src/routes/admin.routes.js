import { Router } from "express";
import {  requireAuth } from '@clerk/express'
import { createSong, deleteAlbum, deleteSong, createAlbum } from "../controller/admin.controller";

const router = Router();

router.post("/song", requireAuth(),  createSong);
router.delete("/song/:id", deleteSong);
router.post("/album", requireAuth(),  createAlbum);
router.delete("/album/:id", deleteAlbum);

export default router;