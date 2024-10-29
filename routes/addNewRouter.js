import express from "express";
import {
	checkAddNewQuestion,
	renderFormPage,
	renderSuccessPage,
	submitNewFlashcard,
} from "../controllers/addNewController.js";

const router = express.Router();

// gets
router.get("/", renderFormPage);
router.get("/success", renderSuccessPage);

// post
router.post("/", submitNewFlashcard);
router.post("/add-question", checkAddNewQuestion, renderFormPage);

export default router;
