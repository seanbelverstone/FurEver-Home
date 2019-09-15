const sequelize = require('./database');
const Sequelize = require('sequelize');

const Favorites = sequelize.define('favorites', {
  // attributes ** THIS WILL NEED TO BE UPDATED CONTINGENT ON WHAT OTHER INFO WE WANT TO SHOW
  user_id: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  pet_id: {
    type: Sequelize.INTEGER,
    allowNull: false
    // allowNull defaults to true
  }
}, {
  // options
});

module.exports = Favorites;