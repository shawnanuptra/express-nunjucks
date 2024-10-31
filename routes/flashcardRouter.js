import express from "express";
const router = express.Router();

// gets
router.get("/", (req, res) => {
	const flashcard = req.app.locals.flashcards.find(
		(flashcard) => flashcard.slug === req.query.slug,
	);
	res.render("flashcard.njk", {
		name: flashcard.name,
		slug: flashcard.slug,
		questions: flashcard.questions,
	});
});

router.get("/start", (req, res) => {
	const flashcard = req.app.locals.flashcards.find(
		(flashcard) => flashcard.slug === req.query.slug,
	);

	const questionIndex = res.app.locals.questionIndex ?? 0;

	res.render("start.njk", { question: flashcard.questions[questionIndex].q });
});

// post
router.post("/start", (req, res) => {
	const userAnswer = req.body.answer;
	const flashcard = req.app.locals.flashcards.find(
		(flashcard) => flashcard.slug === req.query.slug,
	);

	const totalQuestions = flashcard.questions.length;
	const questionIndex = res.app.locals.questionIndex ?? 0;
	const answer = flashcard.questions[questionIndex].a;

	res.app.locals.questionIndex = questionIndex + 1;

	const finished = res.app.locals.questionIndex >= totalQuestions;

	// check answer
	if (answer === userAnswer) {
		req.app.locals.correctAnswersCount++;
		const correctAnswersCount = req.app.locals.correctAnswersCount;
		// show correct state
		res.render("answer.njk", {
			slug: flashcard.slug,
			correctAnswer: answer,
			userAnswer,
			correct: true,
			finished,
			totalQuestions,
			correctAnswersCount,
		});
	} else {
		const correctAnswersCount = req.app.locals.correctAnswersCount;
		// show wrong state
		res.render("answer.njk", {
			slug: flashcard.slug,
			correctAnswer: answer,
			userAnswer,
			correct: false,
			finished,
			totalQuestions,
			correctAnswersCount,
		});
	}

	// reset questionIndex
	if (finished) {
		res.app.locals.questionIndex = 0;
		res.app.locals.correctAnswersCount = 0;
	}
});

export default router;
