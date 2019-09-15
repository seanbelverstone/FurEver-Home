const Sequelize = require("sequelize");
const sequelize = new Sequelize("mysql://root:root@localhost:3307/furever-home", {
    define: {
        timestamps: false
    }
});

module.exports = sequelize;
