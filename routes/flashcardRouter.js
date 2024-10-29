import express from "express";
import flashcardController from "../controllers/flashcardController.js";
const router = express.Router();

router.get("/", flashcardController);

export default router;
