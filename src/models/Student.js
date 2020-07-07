const { Model, Sequelize } = require('sequelize');
const sequelize = require('../db/connection');

class Student extends Model {}

Student.init({
  name: Sequelize.STRING,
  lastName: Sequelize.STRING,
  email: Sequelize.STRING,
}, { sequelize, modelName: 'student', timestamps: false });

module.exports = Student;
