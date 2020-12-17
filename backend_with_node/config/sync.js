/** @format */

const { sequelize, Sequelize } = require('./connectionProvider');

const UserModel = require('../models/User');

//instance of each models

const User = UserModel(sequelize, Sequelize);

sequelize.sync().then(() => {
  console.log('Databases & tables created!!');
});

module.exports = {
  User,
};
