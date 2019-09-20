var bcrypt = require("bcrypt");
const sequelize = require("./database.js");
const Sequelize = require("sequelize");

const User = sequelize.define("user", {

    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false

    }
}, {
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

module.exports = User;