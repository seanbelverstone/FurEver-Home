const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const sequelize = require("./sequelize/database");
const User = require("./sequelize/user");
const Favorites = require("./favorites");
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
//making sure everything is hooked up correctly
sequelize
	.authenticate()
	.then(() => {
		console.log("Connection has been established successfully.");
	})
	.catch(err => {
		console.error("Unable to connect to the database:", err);
	});

//using userid as a placeholder, user requests favorites and server responds w/ their favorites
app.get("/favorites/:userid", (request, response) => {
	Favorites.findAll({
		where: {
			user_id: request.params.userid
		}
	}).then(favorites => {
		response.json(favorites);
	});
});

//code to allow a user to insert into Favorites table ALSO NEEDS TO BE UPDATED WITH NEW INFO
app.post("/favorites", (request, response) => {
	Favorites.create({
		user_id: request.body.user_id,
		pet_id: request.body.pet_id
	}).then(newFavorite => {
		response.json(newFavorite);
	});
});


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
	app.use(express.static("client/build"));
}

app.post("/api/users", (request, response) => {
	User.create({
		name: request.body.name,
		email: request.body.email,
		password: request.body.password
	}).then(newUser => {
		response.json(newUser);
	});

});

// Here, we are both calling apiRoutes as a function, and then Immediately Invoking it. MAGIC!!
require("./routes/apiRoutes.js")(app);
// console.log(app);


// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
	res.sendFile(path.join(__dirname, "./client/public/index.html"));
});

app.listen(PORT, function() {
	console.log(" ==> API server now on port  " + PORT);
});


