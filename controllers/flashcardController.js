export default function (req, res) {
	const flashcard = req.app.locals.flashcards.find(
		(flashcard) => flashcard.slug === req.query.slug,
	);
	res.render("flashcard.njk", {
		name: flashcard.name,
		slug: flashcard.slug,
		questions: flashcard.questions,
	});
}
