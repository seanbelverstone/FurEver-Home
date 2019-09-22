const sequelize = require("./sequelize/database.js");
const Sequelize = require("sequelize");

const Favorites = sequelize.define("favorites", {

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