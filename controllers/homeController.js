export default function (req, res) {
	res.render("index.njk", {
		flashcards: req.app.locals.flashcards,
	});
}
