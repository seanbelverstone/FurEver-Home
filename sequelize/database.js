const Sequelize = require("sequelize");
const env = process.env.NODE_ENV || "development";
const config = require("../client/config/config.json")[env];
var sequelize;


if (config.use_env_variable) {
	sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
	sequelize = new Sequelize(config.database, config.username, config.password, { //config.email,
		host: "localhost",
		dialect: "mysql",
		pool: {
			max: 5,
			min: 0,
			acquire: 30000,
			idle: 10000
		}
	});
}
sequelize.sync({ force: true })
	.then(() => {
		console.log("Database & tables created!");
	});



module.exports = sequelize;