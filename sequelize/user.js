let sequelize;
const Sequelize = require("sequelize");
const config = require("../client/config");

if (config.use_env_variable) {
	sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
	sequelize = new Sequelize(
		config.database,
		config.username,
		config.password,
		config
	);
}

const User = sequelize.define("user", {

	name: {
		type: Sequelize.STRING,
		allowNull: false
	},
	email: {
		type: Sequelize.STRING,
		allowNull: false
		// allowNull defaults to true
	},
	password: {
		type: Sequelize.STRING,
		allowNull: false
	}
});

module.exports = User;