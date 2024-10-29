function slugify(str) {
	// todo: does this work with all names? hint: what about non-alphanumerics? or symbols?
	return str.trim().toLowerCase().replaceAll(" ", "-");
}

export function renderFormPage(req, res) {
	res.render("add-new.njk", {
		name: res.locals.name,
		questions: res.locals.questions,
	});
}

export function renderSuccessPage(req, res) {
	res.render("success.njk");
}

export function checkAddNewQuestion(req, res, next) {
	const name = req.body.name;
	let questions = req.body.questions;
	const answers = req.body.answers;

	// make questions into {q: string, a: string}[]
	questions = questions.map((question, i) => ({ q: question, a: answers[i] }));

	// append to res.local to be passed to renderFormpage
	res.locals = { ...res.locals, questions, name };

	next();
}

export function submitNewFlashcard(req, res) {
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
}
