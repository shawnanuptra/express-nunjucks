import express from "express";
import slugify from "../utilities/slugify.js";

const router = express.Router();

// gets
router.get("/", (req, res) => {
	res.render("add-new.njk", {
		name: res.locals.name,
		questions: res.locals.questions,
	});
});

router.get("/success", (req, res) => {
	res.render("success.njk");
});

// post
router.post("/", (req, res) => {
	const name = req.body.name;
	const slug = slugify(name);
	let questions = req.body.questions;
	const answers = req.body.answers;

	// make questions into {q: string, a: string}[]
	questions = questions.map((question, i) => ({ q: question, a: answers[i] }));

	const flashcard = {
		name: name,
		slug: slug,
		questions: questions,
	};

	// add to state
	req.app.locals.flashcards.push(flashcard);

	res.redirect("add-new/success");
});

router.post("/add-question", (req, res) => {
	const name = req.body.name;
	let questions = req.body.questions;
	const answers = req.body.answers;

	// make questions into {q: string, a: string}[]
	questions = questions.map((question, i) => ({ q: question, a: answers[i] }));

	// append to res.local to be passed to renderFormpage
	res.locals = { ...res.locals, questions, name };
	res.render("add-new.njk", {
		name: res.locals.name,
		questions: res.locals.questions,
	});
});

export default router;
