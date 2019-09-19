<<<<<<< HEAD
const sequelize = require('./sequelize/database.js');
const Sequelize = require('sequelize');
=======
const sequelize = require("./sequelize/database");
// import sequelize from "./database.js";
const Sequelize = require("sequelize");
>>>>>>> 511f237b91b5c391327f811ebde5f47b52f09d49

const Favorites = sequelize.define("favorites", {
	// attributes ** THIS WILL NEED TO BE UPDATED CONTINGENT ON WHAT OTHER INFO WE WANT TO SHOW
	user_id: {
		type: Sequelize.INTEGER,
		allowNull: false
	},
	pet_id: {
		type: Sequelize.INTEGER,
		allowNull: false
		// allowNull defaults to true
	}
});

module.exports = Favorites;