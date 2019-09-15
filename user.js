const sequelize = require('./database');
const Sequelize = require('sequelize');

const User = sequelize.define('user', {
  // attributes ** THIS WILL NEED TO BE UPDATED CONTINGENT ON HOW SEAN CREATES TABLE
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING
    // allowNull defaults to true
  }
}, {
  // options
});

module.exports = User;