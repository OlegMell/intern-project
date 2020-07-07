const { Model, Sequelize } = require('sequelize');
const sequelize = require('../db/connection');

class Group extends Model {}

Group.init({
  name: Sequelize.STRING,
}, { sequelize, modelName: 'group', timestamps: false });

module.exports = Group;
