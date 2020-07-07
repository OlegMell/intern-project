const { Model, Sequelize } = require('sequelize');
const sequelize = require('../db/connection');

class Lesson extends Model {}

Lesson.init({
  topic: Sequelize.STRING,
  classroom: Sequelize.INTEGER,
  begin: Sequelize.DATE,
  end: Sequelize.DATE,
}, { sequelize, modelName: 'lesson', timestamps: false });

module.exports = Lesson;
