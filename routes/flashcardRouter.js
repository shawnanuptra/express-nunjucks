import express from "express";
import flashcardController from "../controllers/flashcardController.js";
import { renderStartGame, submitAnswer } from "../controllers/startGameController.js";
const router = express.Router();

// gets
router.get("/", flashcardController);
router.get("/start", renderStartGame);

// post
router.post("/start", submitAnswer);

export default router;
