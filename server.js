const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const User = require("./sequelize/user");


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
	app.use(express.static("client/build"));
}

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
	res.sendFile(path.join(__dirname, "./client/public/index.html"));
});

app.listen(PORT, function() {
	console.log(`🌎 ==> API server now on port ${PORT}!!`);
});

app.post("/api/users", (request, response) => {
	User.create({
		name: request.body.name,
		email: request.body.email,
		password: request.body.password
	}).then(newUser => {
		response.json(newUser);
	});

});

