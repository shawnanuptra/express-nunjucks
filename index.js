import express from "express";
import cors from "cors";
import homeRouter from "./routes/homeRouter.js";
import nunjucks from "nunjucks";

const PORT = 1234;
const app = express();

app.use(
	cors({
		origin: "*",
		methods: ["GET", "POST"],
	}),
);

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded());

app.use("/", homeRouter);

nunjucks.configure("views", {
	autoescape: true,
	express: app,
});

app.listen(PORT, () => {
	console.log("App is listening at port: ", PORT);
});
