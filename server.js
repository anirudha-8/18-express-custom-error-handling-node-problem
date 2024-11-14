const express = require("express");

const app = express();

app.get("/", (req, res) => {
	res.send("Hello, Express!");
});

app.use((req, res, next) => {
	res.status(404).send("Sorry, Invalid Route!");
});

const port = 8080;

app.listen(port, () =>
	console.log(`App is running at: http://localhost:${port}`)
);
