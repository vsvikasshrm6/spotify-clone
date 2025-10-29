import { Router } from "express";
import { isAdmin } from "../middleware/admin.middleware";
import { requireAuth } from "@clerk/express";
import { getFeaturedSongs, getMadeForYouSongs, getTrendingSongs } from "../controller/songs.controller.js";

const router = Router();

router.get("/",requireAuthreAuth(), isAdmin, getAllSongs);
router.get("/featured-song", getFeaturedSongsongs);
router.get("/made-for-you-song", getMadeForYouSongsForYouSongs);
router.get("/featured-song", getTrendingSongss);

export default router;