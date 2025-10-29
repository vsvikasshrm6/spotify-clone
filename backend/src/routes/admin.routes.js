import { Router } from "express";
import {  requireAuth } from '@clerk/express'
import { createSong, deleteAlbum, deleteSong, createAlbum } from "../controller/admin.controller";
import { isAdmin } from "../middleware/admin.middleware.js";

const router = Router();

router.post("/song", requireAuth(), isAdmin, createSong);
router.delete("/song/:id",requireAuth(),isAdmin, deleteSong);
router.post("/album", requireAuth(), isAdmin, createAlbum);
router.delete("/album/:id", requireAuth(), isAdmin, deleteAlbum);

export default router;