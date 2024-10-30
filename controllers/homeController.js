export default function (req, res) {
	// reset on questionIndex on load
	req.app.locals.questionIndex = 0;
	res.render("index.njk", {
		flashcards: req.app.locals.flashcards,
	});
}
