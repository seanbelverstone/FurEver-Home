module.exports = (sequelize, DataTypes) => {

	const user = sequelize.define("user", {

		name: {
			type: DataTypes.STRING,
			allowNull: false
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false
			// allowNull defaults to true
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false
		}
	});

	user.sync({force: true});
  
	return user;

};