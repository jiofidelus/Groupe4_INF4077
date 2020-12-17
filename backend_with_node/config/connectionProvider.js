/** @format */

const Sequelize = require('sequelize');
require('dotenv').config();

// connect to database
const sequelize = new Sequelize(
  process.env.DATABASE_NAME,
  process.env.USERNAME,
  process.env.PASSWORD,
  {
    host: process.env.HOST,
    dialect: process.env.DIALECT,
  }
);

module.exports = { sequelize, Sequelize };
