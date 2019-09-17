var bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {

	const User = sequelize.define("User", {

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
        },
        hooks: {
        beforeCreate: (user) => {
          const salt = bcrypt.genSaltSync();
          user.password = bcrypt.hashSync(user.password, salt);
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