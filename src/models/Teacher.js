const { Model, Sequelize } = require('sequelize');
const sequelize = require('../db/connection');

class Teacher extends Model {}

Teacher.init({
  name: Sequelize.STRING,
  lastName: Sequelize.STRING,
  email: Sequelize.STRING,
}, { sequelize, modelName: 'teacher', timestamps: false });

module.exports = Teacher;
