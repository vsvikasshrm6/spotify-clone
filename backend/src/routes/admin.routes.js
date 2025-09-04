import { Router } from "express";
import {  requireAuth } from '@clerk/express'

const router = Router();

router.get("/", requireAuth(),  (req, res)=>{
    res.status(200).json({message : "Hello"});
})

export default router;