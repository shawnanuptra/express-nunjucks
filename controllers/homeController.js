const flashcards = [
	{
		name: "First One",
		slug: "first-one",
		questions: [
			{
				q: "q1",
				a: "a1",
			},
			{
				q: "q2",
				a: "a2",
			},
		],
	},
];

export default function (req, res) {
	res.render("index.njk", {
		flashcards,
	});
}
