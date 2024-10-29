let state = 0;

export function helloWorld(req, res) {
	res.render("index.njk", {
		foo: "bar",
	});
}
