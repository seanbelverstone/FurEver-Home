var bcrypt = require("bcrypt");

module.exports = (sequelize, DataTypes) => {

	const User = sequelize.define("User", {

		name: DataTypes.STRING,
		email: DataTypes.STRING,
		password: DataTypes.STRING
		

	},
	{
		hooks: {
			beforeCreate: (user) => {
				const salt = bcrypt.genSaltSync();
				user.password = bcrypt.hashSync(user.password, salt);
			}
		}
	});

	User.prototype.validatePassword = function(password) {
		return bcrypt.compareSync(
			password,
			this.password
		);
	};

	User.sync();

	return User;
};