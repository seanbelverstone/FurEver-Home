const Sequelize = require("sequelize");
<<<<<<< HEAD
const sequelize = new Sequelize("mysql://root:root@localhost:3307/furever-home", {
    define: {
        timestamps: false
    }
});

module.exports = sequelize;
=======
const sequelize = new Sequelize("username", "email", "password", {
	host: "localhost",
	dialect: "mysql",
	pool: {
		max: 5,
		min: 0,
		acquire: 30000,
		idle: 10000
	}
});

module.exports = sequelize;
>>>>>>> master
