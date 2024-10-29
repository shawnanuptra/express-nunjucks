export default function (req, res) {
	const flashcard = req.app.locals.flashcards.find(
		(flashcard) => flashcard.slug === req.query.slug,
	);
	console.log(flashcard);
	res.render("flashcard.njk", { name: flashcard.name, questions: flashcard.questions });
}
