import { Router } from "express";
import { getAlbum, getAllAlbum } from "../controller/album.controller.js";

const router = Router();

router.get("/", getAllAlbum);
router.get("/:id", getAlbum);


export default router;