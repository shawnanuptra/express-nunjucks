import express from "express";
import { helloWorld } from "../controllers/homeController.js";
// initialise a router

const router = express.Router();
router.get("/", helloWorld);

export default router;
